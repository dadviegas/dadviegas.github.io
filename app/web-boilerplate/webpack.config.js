const webpackGen = require('webpack-web-build')
const packageConfig = require('./package.json')

const webpackConfig = {}

const appConfig = {
  version: packageConfig.version,
}

module.exports = webpackGen(webpackConfig, appConfig)
