const message = 'hello';
const message2 = '你好啊';
// 创建buffer
// const buffer = new Buffer(message);

const buffer = Buffer.from(message);
// utf 8
const buffer2 = Buffer.from(message2);
console.log(buffer);
console.log(buffer2);
console.log(buffer2.toString())

// 2、编码使用utf16le, 解码使用utf8