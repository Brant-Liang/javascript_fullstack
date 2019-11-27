const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaStatic = require('koa-static');
const KoaCors = require('koa-cors');
const KoaBody = require('koa-body');

// 生成服务
const app = new Koa();
// 创建路由
const router = new KoaRouter();
// 注册路由 单个路由的中间件
const path = require('path')
router.post('/upload', KoaBody({
  multipart: true,
  formidable: {
    // 上传路径
    uploadDir: path.join(_dirname, '/static/'),
    keepExtensions: true,
    hash: true  // hash 字符串 MD sha256
  }
}), async (ctx) => {
  /**
   * ctx ={
   *  request,
   *  response 
   * }
   * .file 是 koa-body 加上去的
   */
  const diskPath = ctx.request.files.avatar.path
  let fileName = path.basename(diskPath);
  ctx.body = {
    code: 200,
    url: `http://localhost:3000/${fileName}`
  }
})
// 全局的
// 顺序
app.use(KoaCors())
app.use(router.routes())
  .use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server is running 3000');
  
})