// 常见的全局对象
// process 提供node进程中相关的信息
// 比如Node运行环境、参数信息等


// 常用计时器函数
setTimeout(() => {
  console.log('setTimeout');
}, 1000)
setInterval(() => {
  console.log('setInterval');
}, 1000)
setImmediate(() => {
  console.log('setImmediate');
})
process.nextTick(() => {
  console.log('process.nextTick');
})
// 特殊全局对象
// 包括： __dirname(目录名称) __filename（文件名称） export module require
// 实际上是模块中的变量
// 在命令行交互模式是不能使用的
console.log(__dirname);
console.log(__filename);