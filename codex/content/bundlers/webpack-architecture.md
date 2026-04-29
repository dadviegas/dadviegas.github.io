# Webpack Architecture

Webpack turns a dependency graph into one or more output bundles. Understanding how it builds that graph — loaders, plugins, the compilation lifecycle — explains every confusing webpack error and most configuration options.

## The compilation model

Webpack starts from one or more *entry points* and follows `import` / `require` statements to build a module graph. Every file is a module. The graph is resolved, transformed, and optimized in a single compilation:

```
Entry point(s)
    ↓
Module resolution (follow imports)
    ↓
Loader pipeline (transform files to JS)
    ↓
Dependency graph (complete module map)
    ↓
Chunk optimization (split graph into bundles)
    ↓
Output (write files to disk)
```

## Loaders — transform anything to JavaScript

Loaders run on individual files. They're applied in *reverse order* (right to left, or bottom to top in an array):

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',         // 2nd: transform JSX and TS to ES modules
          '@linaria/webpack-loader', // 1st: extract CSS-in-JS (if used)
        ],
        // Applied: @linaria first, then babel-loader
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',     // webpack 5 built-in: inline as data URI
      },
    ],
  },
};
```

Loaders must return JavaScript (or be chained with a final loader that does). A CSS loader chain:

```js
{
  test: /\.css$/,
  use: [
    'style-loader',    // 3rd: inject <style> into DOM at runtime
    'css-loader',      // 2nd: resolve @import and url() — outputs JS module
    'postcss-loader',  // 1st: transform CSS (autoprefixer, nesting)
  ],
}
```

## Plugins — hook into the compilation lifecycle

Plugins tap into webpack's event system (`Tapable`) to modify the compilation at specific stages:

```js
const { DefinePlugin, BannerPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    // Replace process.env.NODE_ENV at build time
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
    }),

    // Generate index.html with injected script tags
    new HtmlWebpackPlugin({ template: './src/index.html' }),

    // Custom plugin: tap into the compilation hooks
    {
      apply(compiler) {
        compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) => {
          // Access compilation.assets, modify output
          callback();
        });
      },
    },
  ],
};
```

## Chunk splitting — controlling bundle boundaries

Webpack automatically splits code into chunks based on dynamic imports and the `SplitChunksPlugin`:

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // Separate vendor bundle (changes less frequently than app code)
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 20,
        },
        // Shared code used in 3+ chunks gets its own bundle
        common: {
          name: 'common',
          minChunks: 3,
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    },
    // Separate runtime (webpack bootstrap code) for better caching
    runtimeChunk: 'single',
  },
};
```

Dynamic imports create natural chunk boundaries:

```tsx
// This import creates a separate chunk for the Settings page
const SettingsPage = React.lazy(() => import('./pages/SettingsPage'));
```

## The module cache and why hot reload works

Webpack's dev server maintains an in-memory module graph. On file change, it re-executes only the changed module and its dependents, then sends an update payload to the browser via websocket. Hot Module Replacement (HMR) applies the update without a full page reload.

React's HMR integrations (via `react-refresh`) preserve component state during hot updates by patching component definitions rather than re-mounting.

## Source maps — debug production builds

```js
module.exports = (env, argv) => ({
  devtool: argv.mode === 'development'
    ? 'eval-source-map'    // fast, embedded in bundle
    : 'source-map',        // separate .map files, slower but usable in prod
});
```

| `devtool` | Rebuild speed | Quality |
|-----------|-------------|---------|
| `eval` | Fastest | Low — shows transpiled code |
| `eval-source-map` | Fast | High — shows original source |
| `cheap-module-source-map` | Medium | Medium — line numbers only |
| `source-map` | Slowest | High — full source + column info |

## Configuration patterns

Webpack configs are JavaScript — this is both flexibility and footgun. For maintainable configs:

```js
// bundler.common.js — shared factory pattern
function createConfig({ name, port, exposes, extraPlugins = [] }) {
  return (env, argv) => ({
    mode: argv.mode ?? 'development',
    entry: './src/index.ts',
    // ... shared config
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      ...extraPlugins,
    ],
  });
}

// app/webpack.config.js — thin app-specific override
const { createConfig } = require('../../bundler.common');
module.exports = createConfig({ name: 'myapp', port: 3001, exposes: { './App': './src/App' } });
```

## Related

- See also: [Bundlers → Rspack Architecture](#/codex/bundlers-rspack-architecture) for the Rust-based Webpack-compatible alternative.
- See also: [Bundlers → Tree Shaking](#/codex/bundlers-tree-shaking-and-side-effects) for how the module graph enables dead code elimination.
- See also: [Module Federation → Fundamentals](#/codex/module-federation-fundamentals) for the Module Federation plugin that enables multi-app architectures.

## Sources

- [Webpack docs — Concepts](https://webpack.js.org/concepts/)
- [Webpack docs — Configuration](https://webpack.js.org/configuration/)
- [Webpack docs — Loaders](https://webpack.js.org/loaders/)
- [Webpack docs — Plugins](https://webpack.js.org/plugins/)
