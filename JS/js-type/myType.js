// function isType(type, value){
//    return Object.prototype
//    .toString.call(value) === `[object ${type}]`;
// }
// function ifString(value){
//    return isType('String', value);
// }
// function isFunction(value){
//    return isType('Function', value);
// }
// function isNumber(value){
//    return isType('Number', value)
// }
const isString =isType.bind(null, 'String');
const isFunction = isType.bind(null, 'Function')
function add(a, b){
   return a + b;
}
function add5(b){
   return add(5, b); 
//能把所有函数的第一个参数 固定住
console.log(isType('String', '123'));
console.log(isType('String', '456'));
console.log(isType('String', '48468464'));
console.log(isType('Function', () =>{}));

// 函数式编程 过程抽象
// 面向对象  数据抽象
