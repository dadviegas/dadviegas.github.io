var webpackGen = require('webpack-web-build');
var packageConfig = require('./package.json');
var webpackConfig = {};
var appConfig = {
    version: packageConfig.version,
};
module.exports = webpackGen(webpackConfig, appConfig);
