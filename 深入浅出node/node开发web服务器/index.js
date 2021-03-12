const http = require("http");

const HTTP_PORT = 8000;

const server = http.createServer((req, res) => {
  res.end("hello world");
})

server.listen(8000, () => {
  console.log(`🚀服务器在${HTTP_PORT}端口运行`);
})