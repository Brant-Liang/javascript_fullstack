function Person (name) {
  this.name = name
  return {}
}
// 构造函数return 只有 对象才能返回
let p = new Person('lc')
// p.__proto__ = Person.prototype
// console.log(p.__proto__);  //person {}
// console.log(Person.__proto__);   Function
// console.log(Function.__proto__); Function



// var foo = {}
// var foo = new Object() 
// var F = function () {}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a);
// console.log(foo.b);
// console.log(F.b);

// console.log(p);

// Arraydex
let arr = [1, 2, 3, 4, 5, 6, 7]
for (let index of arr) {
  console.log(item);
}

for (let item of arr) {
  console.log(item);
}

// for in 
// 1、 index 是索引， 不能直接进行几何运算
// 2、 遍历的顺序可能不是按照实际数组的内部顺序进行的
// 3、 使用for in 会遍历数组的所有可枚举属性，包括原型

// for of 
// 1、 遍历的是数组元素
// 2、 遍历不包括数组的原型和索引