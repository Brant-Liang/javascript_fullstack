//1、属性接口 对json的约束

//定义方法

// function printLabel(label:string):void {
//   console.log('printLabel');
// }

// printLabel()
interface FullName {
  firstName: string; 
  secondName: string;
}

function printName(name: FullName) {

  //必须传入对象 firstName 
}