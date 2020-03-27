
//1、布尔类型（boolean）

//es5
//var flag=true
//flag=456
/* 
  写ts代码必须指定类型
*/
var flag:boolean = true;
//flag = 123 //错误写法

flag = false
console.log(flag);
//2、数字类型（Number）
var num:number = 123;
num = 456
console.log(num);

//3、字符串(string)
var str:string = 'this is ts'
console.log(str);
//4、数组类型(array)
var arr1 = ['1', '2'] //es5定义
//1、
var arr2:number[] = [11,22,33]
console.log(arr2);
//2、
var arr3:Array<number> = [11,12,13]
console.log(arr3);

//5、元组类型(tuple) 属于数组的一种

let arr4:[number,string] = [123, 'this is a string']
console.log(arr4);


//6、枚举类型（enum）
 
enum Flag { success=1, error=2}

let s:Flag = Flag.success
let f:Flag = Flag.error
console.log(s,f);

//如果标识符没有赋值， 值为下标

//7、任意类型(any)

let num1:any = 123
num1 = 'string'
let arr:any = [123, '123', undefined] 
//8、null undefined

var num2:number | undefined;

console.log(num2);
num2 = 12345
console.log(num2);

var num3:null;

var num4:number | null | undefined;

//9、void

function run():void {
  console.log('run');
}
run()

//10、never 从不会出现的值

var a:never;

// a=123 //error
 a=(() => {
   throw new Error('错误')
 })()
