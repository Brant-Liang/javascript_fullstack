// ... 扩展运算符
var obj = {
   a: 1,
   b: 2
}
//浅复制  复制不会改变原对象
function copy(obj){
   let newObj = {};
   for(let key in obj){
      newObj[key] = obj[key];
   }
   return newObj;
}
var obj1 = copy(obj);
obj1.c = 3;
console.log(obj);
//
var obj2 = {
   ...obj
}
console.log(obj2);

// rest 参数 发生在函数上面
function foo(...args){
   console.log(args);
   return Math.max(...args)
}
foo(1,2,3,4,5);
