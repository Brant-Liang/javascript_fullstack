// 泛型
// const arr1: number[] = [1, 2, 3]
// const arr2: Array<number> = [1, 2, 3]
// const arr3: Array<number | string> = [1, 2, 3, '4']
// let x: [number, string] // x为元组
// x = [1, '2']

// function returnItem(param:number): number {
//   return param
// }

// 声明泛型变量<T> 它用于捕获开发者传入的参数类型， 就可以使用变量 <T> 做参数类型和返回值的类型
function returnItem2<T>(param: T): T {
  return param
}
// 函数需要传入多个参数
function swap<T, U>(tuple:[T, U]) {
  return [tuple[0], tuple[1]]
}
swap([7, 'seven'])

// 参数为数组 泛型变量
function getArrayLength<T>(arg: Array<T>){
  console.log(arg.length);
  return arg
}

// 泛型接口
interface ReturnItem<T> {
  (para: T): T
}
const returnItem: ReturnItem<number> = para => para

// 泛型类
// class Stack<T> {
//   private arr: T[] = []

//   public push(item: T) {
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }
// const app = new Stack() 
// app.push('123')

// 泛型约束
type Params = number | string // 对泛型进行约束
class Stack<T extends Params> {
  private arr: T[] = []

  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()  
  }
}
const stack1 = new Stack<number>()
// const stack2 = new Stack<boolean>() error

// 泛型约束与索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U){
  return obj[key]
}
const a = {
  name: 'lc',
  id: 1
}
getValue(a, 'id')

// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomething(): number
}
interface SecondInterface {
  doSomethingElse(): string
}
interface ChildInterface extends FirstInterface, SecondInterface{

}
class Demo<T extends ChildInterface> {
  private genericProperty: T

  useT () {
    this.genericProperty.doSomething()
    this.genericProperty.doSomethingElse()
  }
}

// 泛型和 new
// {new(): T} 泛型可被构造
function factory<T>(type: {new(): T}): T {
  return new type()
}