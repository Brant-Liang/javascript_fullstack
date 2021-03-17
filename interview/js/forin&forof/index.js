// 只要有 iterator 接口的数据结构,都可以使用 for of循环。

// 数组 Array
// Map
// Set
// String
// arguments对象
// Nodelist对象, 就是获取的dom列表集合
// 以上这些都可以直接使用 for of 循环。 凡是部署了 iterator 接口的数据结构也都可以使用数组的 扩展运算符(...)、和解构赋值等操作。


let obj = { a: 1, b: 2, c: 3 }

for(let i in obj) {
  console.log(i)  // key 值
}
// for(let i of obj) {
//   console.log(i) // 报错
// }

const arr = ['a', 'b', 'c']
// for in 循环
for (let i in arr) {
    console.log(i)
    // 0
    // 1
    // 2
}

// for of
for (let i of arr) {
    console.log(i)
    // a
    // b
    // c
}

console.log(...obj);