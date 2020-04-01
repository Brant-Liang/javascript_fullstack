//表达式 A instanceof B
// B.protypeto 在A对象的__proto__对象的原型链上， 返回true

function Foo() {}
var f1 = new Foo()
console.log(f1 instanceof Foo);  // true
console.log(f1 instanceof Object); //true

console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log(Function instanceof Function);
console.log(Function instanceof Object);

console.log(Object instanceof Foo);




