const { merge } = require('webpack-merge')
const webpackGen = require('webpack-typescript-build')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const path = require('path')

const baseWebpackConfig = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html.ejs',
      title: 'App',
    }),
    new FaviconsWebpackPlugin({
      logo: 'public/assets/fav-icon/favicon-32x32.png',
      mode: 'light',
      devMode: 'light',
    }),
  ],
}

module.exports = (webpackConfig, appConfig = {}) => webpackGen(merge(baseWebpackConfig, webpackConfig), appConfig)
