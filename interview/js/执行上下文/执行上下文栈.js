/**
 * 在全局代码执行前，js引擎就会创建一个栈来存储管理所有的执行上下文对象
 * 在全局执行上下文（window)确定后，将其添加到栈中（压栈）
 * 在函数执行上下文创建后，减其添加到栈中（压栈）
 * 在当前函数执行完后，减栈顶的对象移除（出栈）
 * 当所有的代码执行完成后，栈中只剩下window
 * 
 */

 var a = 10
 var bar = function(x) {
   var b = 5
   foo(x + b)
 }
 var foo = function(y) {
   var c = 5
   console.log(a+ c+ y);
 } 
 bar(10) 


 var c = 1
 function c (c) {
   console.log(c);
 }
 //c = 1
 c(2) //报错 c is not a function
