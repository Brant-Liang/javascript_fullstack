var reg = /^a$/;
// * 重复0次或更多次
var reg1 = /^a*$/;
// console.log(reg1.test(''));
// console.log(reg1.test('a'));
// console.log(reg1.test('aa'));
// console.log(reg1.test('aaaaa'));
// console.log('--------------');
// + 重复1次或更多次
var reg1 = /^a+$/;
console.log(reg1.test('')); //false
console.log(reg1.test('a'));
console.log(reg1.test('aa'));
console.log(reg1.test('aaaaa'));
console.log('--------------');
// ? 重复0次或1次
// var reg2 = /^a?$/;
// console.log(reg2.test(''));
// console.log(reg2.test('a'));
// console.log(reg2.test('aa')); //false
// console.log(reg2.test('aaaaa')); //false
// console.log('--------------');
// {n} 重复n次
var reg2 = /^a{3}$/;
console.log(reg2.test(''));
console.log(reg2.test('a'));
console.log(reg2.test('aaa')); //true
console.log(reg2.test('aaaaa'));
console.log('--------------');
// {n,m} 重复n次到m次
var reg2 = /^a{3,6}$/;
console.log(reg2.test(''));
console.log(reg2.test('a'));
console.log(reg2.test('aaa')); //true
console.log(reg2.test('aaaaa')); 
console.log('--------------');
// {n,} 重复n次或更多次

var reg3 = /^(abc){3}$/
console.log(reg3.test('abcabcabc'));