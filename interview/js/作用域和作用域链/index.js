/**
 * 1、理解
 * 就是一块“地盘”，一个代码所在的区域
 * 它是静态的（相对于上下文对象）
 * 
 * 2、分类
 * 全局作用域
 * 函数作用域
 * 块级作用域（es6才有）
 * 3、作用
 *  隔离变量，不同作用域下同名变量不会有冲突
 */

/*  if(true) {
   var c = 3
 }
 console.log(c); */

//  var a = 10,
//  b = 20
//  function fn(x) {
//    var a =100
//    c = 300
//    console.log('fn()', a, b, c, x);
//    function bar(x) {
//      var a = 1000, d = 400
//      console.log('bar()', a, b, c, d, x);
//    }
//    bar(100)
//    bar(200)
//  }
//  fn(10)

 var x = 10
 var fn = function() {
   console.log(x);
 } 
 function show(f) {
  var x = 20
  f()
 }
 show(fn) // 10