const http = require('http');
const fs = require('fs');
const urlModule = require('url');
const nodemailer = require('nodemailer');
let code = 2333;
// /register 展示一个注册的html
// 注册成功之后 展示一个成功的html
http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const urlObj = urlModule.parse(url);
  console.log('url', url);
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  if (url === '/register' && method === 'GET') {
    //req res 两个对象继承了流 Stream 和 事件Event
    fs.createReadStream('./register.html').pipe(res);
  } else if (urlObj.pathname === '/sendEmail' && method === 'GET') {
    const emailQs = urlObj.query;
    const email = emailQs.split('=')[1];
    //
    const transport = nodemailer.createTransport({
      service: 'qq',
      port: 465,
      secureConnection: true,
      auth: {
        user: '1351805238@qq.com',
        pass: 'qmntgqsgabpdghba'
      }
    })
    transport.sendMail({
      to: email,
      html: `<h2>${code}</h2>`,
      from: '1424',
      subject: 'XXX网站验证'
    }, (err, info) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log('err', err);
      if (err) {
        res.end(JSON.stringify({
          code: 500,
          email
        }))
      } else if (urlObj.pathname === '/register1' && method === 'POST') {
        let data;
        req.on('data', (c) => {
          data += c;
        })
        req.on('end', () => {
          console.log('data', data);
          res.end(data);
        })
      }
      else {
        res.end(JSON.stringify({
          code: 200,
          email
        }))
      }
    })
  }
  else {
    res.end('访问错误')
  }
})
  .listen(3344, () => {
    console.log('server is running http://localhost:3344');
  });