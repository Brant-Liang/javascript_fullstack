//koa 框架   类
const Koa = require('koa')
const KoaRouter = require('koa-router');
// fs === file system
const fs = require('fs')
// 生成一个服务
const app = new Koa();
const router = new KoaRouter({ prefix: '/api' })
// app.use 加载一个中间件
// request -> response
// request -> middleWare1 -> middleWare2 -> response
// ctx: { request, response }
router.get('/user', async (ctx) => {
  let userInfo = fs.readFileSync('./api/user.json').toString();
  ctx.body = {
    data: JSON.parse(userInfo),
    code: 200
  }
})
const glob = require('glob')
const path = require('path')
glob.sync(path.resolve('./api/', '*.json'))
.forEach((item, i) => {
  console.log('item',item);
  // /api/user.json
  let apiJsonPath = item && item.split('/api')[1]
  // /user.json
  let apiPath = apiJsonPath.replace('.json', '')
  // /api/user
  // /api/login
  router.get(apiPath, async(ctx) => {
    let fileData = fs.readFileSync(item).toString();
    ctx.body = {
      data: JSON.parse(fileData),
      code: 200
    }
  })
})
// app.use(async (ctx) => {
//   ctx.body = {
//     code: 200,
//     msg: 'ok'
//   }
// })
// http://localhost:3000/api/user
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server is running http://localhost:3000');
})