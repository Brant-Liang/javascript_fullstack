console.log(process.argv[2]);

console.log(process.argv[3]);

process.argv.forEach(item => {
  console.log(item)
})
// node输出

// console.log 
// 清除控制台
console.clear();

function foo() {
  bar();
}

function bar() {
  // 打印函数调用栈
  console.trace();
}

foo();