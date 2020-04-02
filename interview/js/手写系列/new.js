function myNew(func) {
  var res = {} //实例对象
  res.__proto__ == func.prototype
  console.log(arguments);
  
}
myNew(1,'2')