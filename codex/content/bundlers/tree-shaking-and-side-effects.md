# Tree Shaking & Side Effects

Tree shaking eliminates dead code — JavaScript that is imported but never used. It's enabled by ES module static analysis and produces smaller bundles without any code changes. Understanding how it works (and why it silently fails) prevents shipping kilobytes of unused library code.

## How tree shaking works

Tree shaking relies on ES module semantics: `import` and `export` are static declarations that bundlers analyze without executing code. CommonJS (`require()`) is dynamic — the bundler can't determine at analysis time which exports are used.

```ts
// ES module — static, tree-shakeable
export function formatDate(date: Date): string { ... }
export function formatCurrency(amount: number): string { ... }

// Consumer — only imports formatDate
import { formatDate } from './utils';
// formatCurrency is never imported → bundler eliminates it
```

With CommonJS, the bundler must include the entire module because `require()` can be called conditionally at runtime:

```ts
// CommonJS — dynamic, not tree-shakeable
const utils = require('./utils');
// Bundler doesn't know if utils.formatCurrency will ever be called
```

## The `sideEffects` field in `package.json`

Tree shaking removes unreferenced exports. But what about imports with no named export — modules imported for their side effects?

```ts
import './polyfills/intersection-observer';  // no named import, runs global registration
import 'reflect-metadata';                  // adds metadata to Reflect — side effect
```

By default, bundlers assume any import might have side effects and keep it even if nothing is explicitly imported. `package.json`'s `sideEffects` field tells the bundler which files are safe to drop when tree-shaking:

```json
{
  "name": "@company/ui",
  "sideEffects": false
}
```

`"sideEffects": false` means: "no file in this package has side effects — if a module is not imported, drop it entirely." This is the declaration that unlocks full tree shaking of a library.

For packages that do have some side-effect files:

```json
{
  "sideEffects": [
    "./src/polyfills.ts",
    "*.css"                  // CSS imports always have side effects (style injection)
  ]
}
```

## Common tree shaking failures

**1. CommonJS interop.** If a library exports CommonJS and the bundler can't convert it to ES modules, tree shaking is disabled for that library. Check whether the package has an `"module"` field pointing to an ESM build:

```json
{
  "main": "./dist/index.cjs.js",    // CommonJS
  "module": "./dist/index.esm.js"   // ESM — bundler uses this for tree shaking
}
```

**2. Barrel files.** A barrel re-exports many modules through a single entry point. If any export from the barrel has a side effect, the entire barrel must be included:

```ts
// ❌ Bad barrel — if utils/analytics.ts has a side effect, nothing in the barrel shakes
export * from './utils/formatDate';
export * from './utils/formatCurrency';
export * from './utils/analytics';

// ✅ Better: import directly from the module
import { formatDate } from '@company/ui/utils/formatDate';
```

Or mark the barrel explicitly as side-effect-free:

```json
// @company/ui/package.json
{
  "sideEffects": false
}
```

**3. Class properties and decorators.** TypeScript class properties compiled to ES5 can introduce side effects through property initializers:

```ts
class Tracker {
  // This property initializer may be considered a side effect
  private static registry = new WeakMap();
}
```

Use `@babel/plugin-transform-class-properties` with `loose: true` or TypeScript's `useDefineForClassFields: false` to ensure class properties are compiled to simple assignments.

**4. Dynamic imports are not tree-shaken.** Code inside a dynamically imported chunk is only tree-shaken within that chunk — not relative to the host bundle:

```ts
// This chunk imports the full lodash — tree shaking happens inside the chunk only
const { sortBy } = await import('lodash');
```

## Checking tree shaking effectiveness

Use `webpack-bundle-analyzer` or rspack's built-in stats:

```bash
npx webpack-bundle-analyzer dist/stats.json
```

Look for:
- Large `node_modules` packages that appear to be fully included when only a few exports are used
- Multiple versions of the same library (version conflict preventing deduplication)
- Unexpectedly large chunk sizes

## Configuring tree shaking in webpack/rspack

Both bundlers tree-shake in production mode automatically:

```js
module.exports = {
  mode: 'production',  // enables tree shaking + minification
  optimization: {
    usedExports: true,    // mark used exports (for readable output in development)
    sideEffects: true,    // respect the sideEffects field in package.json
    minimize: true,       // run terser/esbuild to eliminate dead code
  },
};
```

In development mode, tree shaking is disabled by default (faster builds). To test tree shaking, build with `mode: 'production'`.

## Related

- See also: [Bundlers → Webpack Architecture](#/codex/bundlers-webpack-architecture) for how the module graph that tree shaking analyzes is built.
- See also: [Bundlers → Code Splitting Strategies](#/codex/bundlers-code-splitting-strategies) for controlling which code is in each bundle.
