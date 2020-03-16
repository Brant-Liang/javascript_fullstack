var http = require('http')

http.createServer((req, res) => {
  if(req.url === '/plain') {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('hello 你好')
  }
  if(req.url === '/html') {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('<p>hello html 哈哈哈</p>')
  }
}).listen(5000, () => {
  console.log('Server is running at 5000');
})