// 边界符
// 提示字符所处位置
// ^ 行首的文本
// $ 行尾的文本

// var rg = /abc/;
// console.log(rg.test('abc')); //true
// console.log(rg.test('abcd')); //true
// console.log(rg.test('aabcd')); //true
// console.log('---------------');
// var reg = /^abc/;
// console.log(reg.test('abc')); //true
// console.log(reg.test('abcd')); //true
// console.log(reg.test('aabcd')); //false
// console.log('---------------');
// var reg2 = /abc$/;
// console.log(reg2.test('abc')); // true
// console.log(reg2.test('abcd')); //false
// console.log(reg2.test('aabc')); // true
// console.log('---------------');
// var reg3 = /^abc$/; //必须是abc才符合要求
// console.log(reg3.test('abc'));
// console.log(reg3.test('abcd'));
// console.log(reg3.test('abcabc'));

// 字符类 [] 表示一系类字符可供选择，
// 只要匹配其中一个即可

var rg = /[abc]/ //只要包含有a或者 b或者 c其中一个

console.log(rg.test('andy'));
console.log(rg.test('car'));
console.log(rg.test('red'));

var rg2 = /^[abc]$/ // 三选一 只有是a 或者是 b 或者是c 其中的一个
console.log(rg2.test('a')); //true
console.log(rg2.test('b')); //true
console.log(rg2.test('ac')); //false
console.log('---------------');
// [-]方括号内部范围符 -
var rg2 = /^[a-z]$/ // 26个英文字母任何一个字母返回true

//字符组合
var reg = /^[a-zA-Z0-9_-]$/; //26个英文字母
console.log(reg.test('a')); //true
console.log(reg.test('B')); //true
console.log(reg.test(8));   //true
console.log(reg.test('-')); //true
console.log(reg.test('!')); //false
console.log('-------------');
//[]中 ^取反
var reg2 = /^[^a-zA-Z0-9_-]$/; //26个英文字母
console.log(reg2.test('a')); //false
console.log(reg2.test('B')); //false
console.log(reg2.test(8));   //false
console.log(reg2.test('-')); //false
console.log(reg2.test('!')); //true