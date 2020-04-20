function myNew(constructor, args) {
  var obj = {} //实例对象
  obj.__proto__ = constructor.prototype
  constructor.call(obj, ...args)
  
}
myNew(Function,'2')

function a() {
  this.b = 1;
}
var obj = new a();
console.log(obj.b);