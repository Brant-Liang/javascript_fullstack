- restful web
  一切皆资源
  DOM + CSS + JS
  URL Universal Resource Location
   http://www.taobao.com/shop/1/good/2
   明确的表达 它的资源是什么意思

- npm init -y 从前端项目，加入后端
  scripts 执行一些命令
  json-server npm包
  url 上 将json文件向外暴露
  json 就是资源文件
  restful url的设计规范 语义化的URL
  :1314/posts GET请求 拿到文章列表
  如果要拿到详情 :1314/posts/:id
  请求数据方式
  GET 通过URL明文访问
  POST 新增数据
  PUT 表示修改数据
  PATCH 修改数据
  DELETE 删除数据


  url + 请求的谓语动词 进行语义化的请求
  PUT 和 PATCH 的区别
  PUT   覆盖修改
  PATCH  部分修改

- :8080 live-server web 页面
   :1314 启动了 后端API
   不同的端口代表不同的服务
   前后端 全栈型项目