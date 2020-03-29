RFC (Request For Comments)规定 HTTP状态码为三位数

# 1XX 表示目前协议处理的中间状态，还需后续开头
  101 Switch Protocols 在Http升级为WebSocket的时候，如果服务器同意变更，就会发送101
# 2XX 表示成功
  200 OK 表示请求成功
  204 No Content 请求成功，但响应头后没有数据
  206 服务器成功执行客户端进行范围请求
# 3XX 表示重定向状态，资源位置发生变动，需要重新请求
  301 Moved Permanently 即永久重定向， 之前的网站再也不用了 浏览器会做缓存优化
  302 Found 临时重定向 浏览器不会做缓存优化
  303 See Other 表示请求对应的资源存在另一个URL，因使用GET方法获取请求资源
  304 Not Modified 服务端资源未改变，可以直接使用客户端未过期的资源
# 4XX 请求报文有误
  400 Bad Request 请求报文中存在语法错误
  403 Forbidden 服务器禁止访问
  404 Not Found 服务器上没有找到相应的资源
  405 Method Not Allowed 请求方法不被服务器允许
# 5XX 服务器端发送错误
  500 Internal Server Error 服务器出错
  501 Not Implemented: 表示客户端请求的功能还不支持
  502 Bad Gateway 服务器正常
  503 Service Unavailable 服务器繁忙或正在维护