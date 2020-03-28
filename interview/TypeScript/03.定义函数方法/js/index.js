//函数定义
//1、
function run() {
    return '123';
}
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
