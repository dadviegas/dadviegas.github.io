const { merge } = require('webpack-merge')
// const CopyPlugin = require('copy-webpack-plugin')

const path = require('path')

const currentPath = process.cwd()

const baseWebpackConfig = {
  entry: {
    bundle: './src/index.tsx',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {},
}

module.exports = (webpackConfig, appConfig = {}) => (env, args) => {
  const appVersion = appConfig.version

  const webpackVars = {
    mode: env.mode || 'development',
    output: {
      filename: '[name].js',
      path: path.resolve(currentPath, 'dist', appVersion),
    },
  }

  return merge(
    webpackVars,
    baseWebpackConfig,
    webpackConfig
  )
}
