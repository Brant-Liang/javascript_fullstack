const path= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpack = require('optimize-css-assets-webpack-plugin')
//设置node.js环境变量
// process.env.NODE_ENV = 'development'
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
          MiniCssExtractPlugin.loader,
          "css-loader" ,
          /* 
            css兼容性处理： postcss --> postcss-loader postcss-preset-env
          */
        
         //使用loader的默认配置
         // 'postcss-loader',
         // 修改loader的配置 
         {
           loader: 'postcss-loader',
           options: {
             ident: 'postcss',
             plugins: () => [
               //postcss的插件 (帮助postcss 找到package.json中browserslist 里面的配置)
               //  "browserslist": {
              //   "development": ["last 1 chrome version", 
              //                   "last 1 firefox version"],
              //   "production": [">0.2%", "not dead", "not op_mini all"]
              // },
               require('postcss-preset-env')
             ]
           }
         }
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
    }),
    new OptimizeCssAssetsWebpack()
  ],
  mode: "development"
}