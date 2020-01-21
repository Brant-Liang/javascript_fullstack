const path = require('path')
const webpack = require('webpack')
const htmlWabpackPlugin = require('html-webpack-plugin')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: 'dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  plugins: [
    new webpack.BannerPlugin('版权归我所有'),
    new htmlWabpackPlugin({
      template: 'index.html'
    }),
    new uglifyjsWebpackPlugin()
  ]
}