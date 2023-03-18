// new 实现原理
/* 
  1、创建一个空对象，构造函数中的this指向这个空对象
  2、这个对象的__proto__属性指向构造函数的prototype属性
  3、执行这个构造函数的方法，将属性和方法添加到this引用的对象中
  4、如果构造函数中没有返回其他对象，那么返回this,即创建的这个新对象 否则返回构造函数中的对象
*/

function myNew(constructor, args) {
  let obj = {} //实例对象
  obj.__proto__ = constructor.prototype;
  let res = constructor.call(obj, args);
  console.log(res, obj);
  if(res&&(typeof (res) === 'object' || typeof (res) === 'function')) {
    return res;
  }
  return obj;
}
function a() {
  this.b = 1;
  this.say = () => {
    console.log('hello');
  }
}
a.prototype.say2 = () => {
  console.log('hi');
}
let a1 = myNew(a);
console.log(a1.b);
a1.say();
a1.say2();
