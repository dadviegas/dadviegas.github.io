const { merge } = require('webpack-merge')
const webpackGen = require('webpack-web-build')

const baseWebpackConfig = {}

module.exports = (webpackConfig, appConfig = {}) => webpackGen(merge(baseWebpackConfig, webpackConfig), appConfig)
