// let http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('Hello world')
// })
// server.listen(3000, () => {
//   console.log('服务跑起来啦')
// })

// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = "hello world2"
// })

// app.listen(3000)

let myKoa = require('./lib/application')
let app = new myKoa() 

app.use((ctx) =>{
  // console.log(ctx.req.url);
  // console.log(ctx.request.req.url);
  // console.log(ctx.response.req.url);
  // console.log(ctx.request.url);
  // console.log(ctx.response.url);
  // console.log(ctx.url);
  // console.log(ctx.path);
  ctx.body = "hello dukawgdauw"
  console.log(ctx.body);
  
})
app.listen(3000)