function myNew(constructor, args) {
  var obj = {} //实例对象
  obj.__proto__ == constructor.prototype
  constructor.call(obj, ...args)
  
}
myNew(1,'2')