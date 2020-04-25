/* 
  在call方法中获取调用call()函数
  如果第一个参数没有传入，那么默认指向window /global
  传入call的第一个参数是this指向的对象,根据隐式绑定的规则，我们知道obj.foo() foo()的this指向obj
  因此我们可以这样调用函数 thisArgs.func(...args)
*/

Function.prototype._call = function(context) {
  if(!context) {
    context = typeof window === 'undefined' ? global : window
  }
  // this的指向是当前函数 func(func.call)
  context.func = this; //this指向的是当前的函数（Function的实例）
  let rest = [...arguments].slice(1);
  let res = context.func(...rest);
  delete context.func;
  return res;
}

var foo = {
  name: 'Brant'
}
var name = 'Ariel';
function bar(job, age) {
  console.log(this.name);
  console.log(job, age);
}
bar._call(foo, 'progremmer', 20);
bar._call(null, 'progremmer', 20)