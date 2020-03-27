const path= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //"style-loader", 创建style标签，将样式放入
          //这个loader取代style-loader。 作用：提取js中的css单独成单独文件
          MiniCssExtractPlugin.loader,
          "css-loader" //将css文件整合到js文件中
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      //重命名和路径
      filename: 'css/built.css'
    })
  ],
  mode: "development"
}