# Babel vs SWC

Babel and SWC are both JavaScript transpilers — they convert modern JS/TS syntax to a target that browsers support. SWC is 20–70× faster because it's written in Rust and parallelizes across CPU cores. Babel has a vastly larger plugin ecosystem and is still the only option for some transforms. Choosing between them depends on what transforms you actually need.

## What transpilers do

A transpiler reads source code, parses it into an AST, transforms the AST according to configured rules, and emits output code. The transforms fall into three categories:

1. **Syntax lowering** — convert `?.` (optional chaining), `??` (nullish coalescing), class fields, etc. to older equivalents that target environments understand.
2. **JSX/TSX** — convert `<Component />` syntax to `React.createElement(...)` or the new JSX transform.
3. **Custom transforms** — things like `@emotion/babel-plugin` (adds stable labels to CSS-in-JS), `babel-plugin-transform-imports` (rewrites barrel imports), or `babel-plugin-macros`.

## SWC — when it's the right choice

SWC handles categories 1 and 2 natively, much faster than Babel. It's the default transpiler in rspack, Vite's Rust-based transforms (`@vitejs/plugin-react-swc`), and Next.js (since v12).

```js
// rspack.config.js — SWC via built-in loader
{
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              transform: {
                react: {
                  runtime: 'automatic',  // new JSX transform
                },
              },
            },
          },
        },
      },
    ],
  },
}
```

No `@babel/core`, no `@babel/preset-env`, no `@babel/preset-typescript` — SWC handles all of this natively.

## Babel — when it's still necessary

Babel remains necessary when you need custom AST transforms that don't exist in SWC's plugin system. The most relevant cases in frontend development:

- **`@emotion/babel-plugin`** — adds stable component labels and enables component selectors in Emotion CSS-in-JS. There's no SWC equivalent that provides full parity. (rspack works around this with `rspackExperiments.emotion: true`, but it's a different code path.)
- **`babel-plugin-macros`** — enables zero-config compile-time macros. No SWC equivalent.
- **Stage 3 proposals before native support** — occasionally a language proposal has a Babel plugin before SWC lands native support.
- **Testing transforms** — `babel-jest` is common in Jest setups; though Vitest with SWC is now possible, some legacy Jest configs depend on Babel.

## Performance numbers

| Operation | Babel | SWC | Speedup |
|-----------|-------|-----|---------|
| TypeScript type stripping | ~100ms / file | ~5ms / file | ~20× |
| JSX transform | ~80ms / file | ~4ms / file | ~20× |
| Cold build (medium app) | ~45s | ~8s | ~5× |
| Hot rebuild (one file) | ~500ms | ~30ms | ~16× |

The speedup is most visible on cold builds and in CI where caches don't help.

## Coexistence in the Atlantis codebase

The Atlantis monorepo runs both based on the `ATLANTIS_BUNDLER` environment variable:

```js
// bundler.common.js — dispatches to the right factory
const BUNDLER = process.env.ATLANTIS_BUNDLER ?? 'webpack';

module.exports = BUNDLER === 'rspack'
  ? require('./rspack.common')
  : require('./webpack.common');
```

- **webpack path** (default for `dev`) — uses `babel-loader` with `@emotion/babel-plugin`. Slower builds but full Emotion support including component selectors in the shell.
- **rspack path** (`pnpm build` / `pnpm dev:rspack`) — uses `builtin:swc-loader` with `rspackExperiments.emotion: true`. Fast builds; remote apps that don't need component selectors get full parity.

The shell's webpack config enables `@emotion/babel-plugin` only for the shell; remote apps use SWC-compatible Emotion runtime mode by default (no component selectors — see `docs/constraints.md`).

## TypeScript stripping

Both Babel and SWC strip types — neither checks them. Type checking is still `tsc --noEmit`, run separately. This is a performance property, not a limitation: the transpiler never blocks on waiting for type inference.

```json
// package.json — typecheck is separate from build
{
  "scripts": {
    "dev": "node ../../scripts/bundler.js serve",
    "build": "node ../../scripts/bundler.js build",
    "typecheck": "tsc --noEmit"   // separate, slower, only run when needed
  }
}
```

## Migration path from Babel to SWC

1. Audit your `.babelrc` / `babel.config.js` plugins. Which are syntax transforms (can be handled by SWC)? Which are custom AST transforms (require Babel)?
2. Replace `babel-loader` with `builtin:swc-loader` (rspack) or the Vite SWC plugin.
3. Move any remaining Babel transforms to a targeted `babel-loader` rule scoped to the files that need them, not the whole project.
4. Run `pnpm build` + `pnpm typecheck`. If types pass and the bundle behaves the same, the migration is complete.

## Related

- See also: [Bundlers → Webpack vs Rspack Comparison](#/codex/bundlers-webpack-vs-rspack-comparison) for the broader bundler decision matrix where Babel/SWC is one factor.
- See also: [Emotion → Runtime vs Compile-Time Emotion](#/codex/emotion-runtime-vs-compile-time) for why `@emotion/babel-plugin` is the one case where Babel can't be dropped.

## Sources

- [Babel docs — What is Babel?](https://babeljs.io/docs/)
- [SWC docs — Introduction](https://swc.rs/docs/getting-started)
- [Next.js — SWC compiler](https://nextjs.org/docs/architecture/nextjs-compiler)
- [SWC blog — Performance comparison](https://swc.rs/blog/perf-swc-vs-babel)
