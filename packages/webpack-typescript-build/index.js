const { merge } = require('webpack-merge')
const webpackGen = require('webpack-base-build')

const baseWebpackConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: require.resolve('ts-loader'),
        exclude: /node_modules/,
      },
    ],
  },
}

module.exports = (webpackConfig, appConfig = {}) => webpackGen(merge(baseWebpackConfig, webpackConfig), appConfig)
