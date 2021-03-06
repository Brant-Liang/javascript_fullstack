const fs = require('fs');
const sharp = require('sharp');
// 读取文本文件
// fs.readFile('./foo.txt', (err, data) => {
//   console.log(data);
//   console.log(data.toString());
// });


// fs.readFile('./bar.jpeg', (err, data) => {
//   console.log(data);
  
//   fs.writeFile('./foo.png', data, err => {
//     console.log(err)
//   } )
// })

// sharp库的使用
// sharp('./bar.jpeg')
//   .resize(200, 200)
//   .toFile('./baz.png');

sharp('./foo.png')
  .resize(300, 300)
  .toBuffer()
  .then(data => {
    fs.writeFile('./bax.png', data, err => {
      console.log(err);
    })
  })