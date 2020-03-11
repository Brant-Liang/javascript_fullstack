const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
//创建实例对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), //源文件
  fileName: 'index.html' //生成内存中首页名称
})
// 向外暴露一个打包的配置对象
module.exports = {
  mode: 'development',
  //在webpack 4.x 中约定大于配置，默认打包路径src-> index.js
  plugins: [
    htmlPlugin
  ]
}