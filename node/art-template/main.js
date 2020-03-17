//art-template 浏览器和node都可使用

var template = require('art-template')
var fs = require('fs')
// template.render('模板字符串', 替换对象)
fs.readFile('./index.html', (err, data) => {
  if(err) {
    console.log(err);
  }else{
    var ret = template.render(data.toString(), {
      name: 'Jack',
      Provence: 'JIA ZHOU'
    })
    console.log(ret);
  }
})

