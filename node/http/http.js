//创建web服务器
//在Node中专门提供了一个核心模块 ：http

//1、加载http核心模块
var http = require('http')

//2、使用http.createServer()方法创建一个Web服务器
//返回一个Server实例
var server = http.createServer()
//服务器作用 提供对数据的服务
//发请求 接受请求 处理请求 发送响应
//3、注册request请求事件
//当客户端发送请求后，就会自动触发服务器的request的请求事件，然后执行第二个参数，回调处理
server.on('request', function(req, res) {
  console.log('收到客户端请求'+ req.url)
  var url = req.url
  // if(url === '/' || url === '/index')
  //   res.end('index')
  // else if(url === '/home')
  //   res.end('home')
  // else
  //   res.end('404 not found')
  if(url === '/products') {
    var products = [
      {
        name: '苹果 X',
        price: 8888
      },{
        name: '菠萝 X',
        price: 6666
      },
      {
        name: '辣椒 X',
        price: 777
      }
    ]
    res.end(JSON.stringify(products))
  }
})

//4、绑定端口号，启动服务器
server.listen(3000, function() {
  console.log('服务器启动了')
})