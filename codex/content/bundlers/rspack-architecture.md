# Rspack Architecture

Rspack is a Rust-based bundler with a webpack-compatible API. It runs the hot-path operations (module parsing, dependency resolution, code generation) in Rust with true parallelism, while keeping JavaScript extensibility for loaders and plugins. For large TypeScript/React projects, the result is 5–10× faster builds without configuration rewrites.

## Why Rust changes the performance equation

Webpack's architecture processes modules sequentially in JavaScript's single-threaded runtime. Rspack's core runs in Rust threads:

- Module resolution: parallel across the dependency graph
- Code generation: parallel per-module
- Asset emission: parallel file writes

The JavaScript event loop is still involved for loaders and plugins, but the bottleneck operations move to native code. A project with 5,000 modules sees proportionally more benefit than a project with 200.

## API compatibility

Rspack's goal is webpack API compatibility. Most of `webpack.config.js` works unchanged:

```js
// This config works in both webpack and rspack
module.exports = {
  entry: './src/index.ts',
  output: { filename: '[name].[contenthash].js', publicPath: 'auto' },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',  // rspack can run babel-loader (slower than SWC, but compatible)
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
};
```

Rspack's own SWC-based transformer is faster than `babel-loader`:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'builtin:swc-loader',  // rspack built-in — no npm install
        options: {
          jsc: {
            parser: { syntax: 'typescript', tsx: true },
            transform: { react: { runtime: 'automatic' } },
          },
        },
      },
    ],
  },
};
```

## Plugins: native vs JavaScript

Rspack provides native (Rust) implementations of common plugins:

| Webpack plugin | Rspack equivalent |
|----------------|-------------------|
| `HtmlWebpackPlugin` | `rspack.HtmlRspackPlugin` (built-in) |
| `DefinePlugin` | `rspack.DefinePlugin` (built-in) |
| `CopyWebpackPlugin` | `rspack.CopyRspackPlugin` (built-in) |
| `MiniCssExtractPlugin` | `rspack.CssExtractRspackPlugin` (built-in) |

JavaScript webpack plugins that tap into `compiler.hooks` work in rspack too, but they execute in JS — not in Rust — so they don't get the parallelism benefit.

## Module Federation in rspack

Rspack uses `@module-federation/enhanced/rspack` instead of webpack's built-in `ModuleFederationPlugin`:

```js
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'myapp',
      filename: 'remoteEntry.js',
      exposes: { './App': './src/App' },
      shared: {
        react: { singleton: true, requiredVersion: '^18.3.1' },
        'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
      },
    }),
  ],
};
```

Promise-based remote strings (used for dynamic URL resolution at runtime) are supported by both bundlers, so the shell's `remoteEntry.js` URL resolution pattern works unchanged.

## Emotion in rspack

Rspack doesn't process Babel, so `@emotion/babel-plugin` doesn't run. Instead, enable rspack's Emotion experiment:

```js
module.exports = {
  experiments: {
    rspackExperiments: {
      emotion: {
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        sourceMap: true,
      },
    },
  },
};
```

This replicates autoLabel and sourceMap from the Babel plugin. Component selectors work in the rspack shell build. Remote apps in a mixed build (webpack shell + rspack remotes or vice versa) face the runtime-only constraint described in the Emotion section.

## When rspack is the right choice

| Situation | Recommendation |
|-----------|---------------|
| Cold start > 30s with webpack | Switch to rspack for dev |
| CI build > 5 minutes | Switch to rspack for production builds |
| Need Babel transforms (e.g. complex decorators) | Stay on webpack or add `babel-loader` to rspack |
| Need `@emotion/babel-plugin` component selectors in remotes | Stay on webpack for those remotes |
| Starting a new project | rspack + `builtin:swc-loader` is the default choice in 2025 |

## Persistent cache

Both webpack 5 and rspack support persistent file-system caching. Rspack's cache is faster because serialization/deserialization runs in Rust:

```js
module.exports = {
  cache: {
    type: 'filesystem',
    cacheDirectory: '.rspack-cache',
    buildDependencies: {
      config: [__filename],  // invalidate cache when this file changes
    },
  },
};
```

First build populates the cache. Subsequent builds only rebuild changed modules. With a warm cache, rspack builds are often under 1 second for small-to-medium projects.

## Related

- See also: [Bundlers → Webpack Architecture](#/codex/bundlers-webpack-architecture) for the architecture rspack is compatible with.
- See also: [Bundlers → Webpack vs Rspack Comparison](#/codex/bundlers-webpack-vs-rspack-comparison) for a side-by-side decision guide.
- See also: [Module Federation → Fundamentals](#/codex/module-federation-fundamentals) for the shared singleton configuration that matters most.
