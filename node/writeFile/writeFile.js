var fs = require('fs') 
//文件路径 文件内容 回调函数
fs.writeFile('./readmd.md', '大家好 我是Node.js 2',function(error) {
  /* 成功：
      文件写入成功
      error : null
    失败
      error: 错误对象
  */
 if(error) {
   console.log('文件写入失败', error);
 }else {
   console.log('文件写入成功');
 }
})
fs.readFile('./readmd.md', function(error, data) {
  /* 写入成功：
    error: null
    data: 数据
    写入失败：
    error: 错误对象
    data: undefined
  */
 if(error) {
   console.log('文件读取失败', error);
 }else{
   console.log(data.toString());
 }
})