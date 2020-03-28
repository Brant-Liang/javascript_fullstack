//函数定义
//1、
var run = function () {
    return '123';
};
//2、匿名函数
var fun2 = function () {
    return 123;
};
//定义方法传参
// function getInfo(name:string, age:number):string {
//   return `${name}---${age}`
// }
// console.log( getInfo('张三', 18));
//匿名定义
var getInfo2 = function (name, age) {
    return name + "---" + age;
};
//没有返回值
function run2() {
    console.log('no return');
}
// ts中实参和形参必须一样 如果要可进行可选参数
function getInfo3(name, age) {
    return name + "---" + age;
}
console.log(getInfo3('张三'));
console.log(getInfo3('张三', 123));
//设置默认参数
var info = function (name, age) {
    if (age === void 0) { age = 20; }
    return name + "---" + age;
};
//剩余参数
var sum = function (a, b, c) {
    return 11;
};
var sum2 = function () {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
};
console.log(sum2(1, 2, 3, 4));


//函数的重载
