
//函数定义

//1、

var run = function():string {
  return '123'
}

//2、匿名函数
var fun2 = function():number {
  return 123
}

//定义方法传参
// function getInfo(name:string, age:number):string {
//   return `${name}---${age}`
// }

// console.log( getInfo('张三', 18));
//匿名定义
var getInfo2 = function(name:string, age:number):string {
  return `${name}---${age}`
}
//没有返回值
function run2():void {
  console.log('no return');
}

// ts中实参和形参必须一样 如果要可进行可选参数
function getInfo3(name:string, age?:number):string {
  return `${name}---${age}`
}
console.log( getInfo3('张三'));
console.log( getInfo3('张三', 123));

//设置默认参数

var info = function(name:string,age:number=20) {
  return `${name}---${age}`
}

//剩余参数

var sum = function(a:number, b:number,c:number):number {
  return 11
}
var sum2 = function(...result:number[]):number{
  var sum = 0;
  for(var i = 0; i < result.length; i++) {
    sum+=result[i]
  }
  return sum
}
console.log(sum2(1,2,3,4));