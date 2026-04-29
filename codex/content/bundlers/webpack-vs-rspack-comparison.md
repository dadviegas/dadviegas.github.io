# Webpack vs Rspack Comparison

Both bundlers produce the same output format and share most of their API. Choosing between them comes down to build performance requirements, plugin ecosystem needs, and specific features that one supports and the other doesn't.

## Side-by-side comparison

| Feature | Webpack | Rspack |
|---------|---------|--------|
| Language | JavaScript | Rust (core) + JS (plugins/loaders) |
| Cold build (5k modules) | ~30–60s | ~3–8s |
| HMR update | ~500ms–2s | ~100–400ms |
| Persistent cache | Yes (filesystem) | Yes (filesystem, faster) |
| Module Federation | Built-in plugin | `@module-federation/enhanced` |
| Emotion support | `@emotion/babel-plugin` | `rspackExperiments.emotion` |
| Babel loaders | Full support | `babel-loader` works (slower than SWC) |
| SWC loaders | `swc-loader` (npm) | `builtin:swc-loader` (native) |
| Plugin ecosystem | Mature (10+ years) | Growing (2+ years, most webpack plugins work) |
| Source maps | Full support | Full support |
| CSS extraction | `mini-css-extract-plugin` | Built-in `CssExtractRspackPlugin` |
| Tree shaking | Yes | Yes |
| `require.context` | Yes | Partial (common patterns work) |

## Performance difference in practice

The gap is largest for cold builds (no cache). With warm persistent caches, both converge:

```
# Cold build, 8,000 module project (rough benchmarks)
webpack 5:   45s
rspack:       6s

# With warm cache
webpack 5:    8s
rspack:       1.5s

# HMR update (single component change)
webpack 5:   1.2s
rspack:      0.2s
```

The faster HMR is where developers feel the difference most — every file save, all day.

## Parity gaps to be aware of

**`require.context`** (for dynamic requires from a directory): basic patterns work in rspack, but advanced patterns may fail. Use explicit imports or a manifest-based registry instead.

**Custom plugins using deep webpack internals**: plugins that tap into `compilation.modules` or `compilation.chunks` directly may need adjustments. The public hooks API is compatible; internal structures differ.

**`@emotion/babel-plugin` component selectors in remote apps**: webpack remotes can use the Babel plugin and get component selectors. Rspack remotes in a webpack shell cannot — they're runtime-only. This is the most common constraint hit in mixed MF setups.

## Sharing a single config

The recommended pattern for teams that want to use both:

```js
// bundler.common.js — dispatches based on ATLANTIS_BUNDLER env var
const { createConfig: createWebpackConfig } = require('./webpack.common');
const { createConfig: createRspackConfig } = require('./rspack.common');

const useRspack = process.env.ATLANTIS_BUNDLER === 'rspack';
module.exports = {
  createConfig: useRspack ? createRspackConfig : createWebpackConfig,
};
```

```json
// package.json scripts
{
  "dev":   "ATLANTIS_BUNDLER=webpack   node scripts/bundler.js serve",
  "dev:rspack": "ATLANTIS_BUNDLER=rspack node scripts/bundler.js serve",
  "build": "ATLANTIS_BUNDLER=rspack    node scripts/bundler.js build"
}
```

Webpack for development (when Babel plugins are needed, e.g. component selectors in the shell), rspack for production builds (fast CI).

## Decision matrix

**Choose webpack when:**
- You need `@emotion/babel-plugin` component selectors in remote apps.
- Your team uses plugins that don't support rspack yet (check the rspack compatibility list).
- You're maintaining a legacy codebase with deeply customised webpack config internals.
- Build time is acceptable (< 15s cold start).

**Choose rspack when:**
- Cold build time is a dev experience bottleneck (> 20s).
- CI build time is a cost/productivity concern.
- Starting a new project.
- You're OK using `builtin:swc-loader` instead of babel-loader (faster, fewer transform options).

**Use both simultaneously when:**
- Shell uses webpack (for `@emotion/babel-plugin` component selectors + the Babel ecosystem).
- All remote apps use rspack (fast builds where component selectors aren't needed).
- Production builds use rspack across the board (`ATLANTIS_BUNDLER=rspack pnpm build`).

## Migration path from webpack to rspack

1. Install `@rspack/core` and `@rspack/cli`.
2. Create an rspack config that mirrors the webpack config (most options transfer directly).
3. Replace `babel-loader` with `builtin:swc-loader` (and port any Babel plugins to SWC equivalents).
4. Replace webpack-specific plugins with rspack built-ins where available.
5. Run both configs and diff the output — bundle sizes and chunk splits should be comparable.
6. Keep the webpack config as a fallback for features that rspack doesn't support yet.

## Related

- See also: [Bundlers → Webpack Architecture](#/codex/bundlers-webpack-architecture) for the reference architecture.
- See also: [Bundlers → Rspack Architecture](#/codex/bundlers-rspack-architecture) for rspack-specific configuration.
- See also: [Bundlers → Tree Shaking](#/codex/bundlers-tree-shaking-and-side-effects) for how both bundlers handle dead code elimination.
