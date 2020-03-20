//1、引入包
const express = require('express')
//2、创建服务器应用程序
//相当于http.createServer
var app = express()
//公开指定目录
//直接通过/public/xxx 访问
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))
// app.get('/', function(req, res) {
//   res.send(`<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//   </head>
//   <body>
//     <div>你好 express</div>
//   </body>
//   </html>`)
// })
app.get('/', function(req, res) {
  res.render('index.html')
})
app.get('/post', function(req, res) {
  res.send('post page')
})

app.listen(3000, function() {
  console.log('Server is running at 3000');
})