//Symbol
// 解决变量重复的问题   
let a = Symbol();
let b = Symbol();
console.log(a == b);

var obj ={
   name: 'name',
   name: 'name1',
   [a]: 'symbol'
}
//对象 key 支持 字符串 和 Symbol
// 但是 Symbol 是不可枚举的
for(let key in obj){
   console.log(key);
}
console.log(Object.getOwnPropertySymbols(obj));
//const SAN_JIAO = 'sanjiao_123456'
const SAN_JIAO = Symbol();
//只是一个描述 console.log()
function getArea(shapeName){
   switch(shapeName){
      case 'SAN_JIAO':
         return .5 * 10 * 5;
      case 'changfangxing':
         return 10 * 5;
   }
}
//消除魔法字符串
console.log(getArea(SAN_JIAO));

getArea(SAN_JIAO);