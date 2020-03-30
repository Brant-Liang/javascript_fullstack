const express = require('express')
const app = express()
const port = 3009
var bodyParser = require('body-parser');//用于req.body获取值的
app.use(bodyParser.json());
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }));
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');;
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

const user = {
    username: 'admin',
    password: '123'
  }
app.get('/api/v1/auth/manager_login', (req, res) => {
  console.log(req);
  res.send(user)
})
app.post('/api/v1/auth/manager_login', (req, res) => {
  var data = req.body
  if(data.username ===user.username && data.username.password != user.password) {
    res.send({
      "code": "success",
      "token": data.username
    })
  }
  else {
    res.send({
      "code": "fail",
      "message": "用户名或密码错误"
    })
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))