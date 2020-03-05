// 封装栈类
function Stack() {
  this.items = []
  // 栈的相关操作
  //1、压栈
  
  //给对象实例添加方法 
  // this.push = function(element) {
  // }
  // 给整个类添加方法 节省内存 效率高
  Stack.prototype.push = function(element) {
    this.items.push(element)
  }
  //2、出栈
  Stack.prototype.pop = function() {
    return this.items.pop()
  }
  //3、查看栈顶元素
  Stack.prototype.peek = function() {
    return this.items[this.items.length - 1]
  }
  //4、是否为空
  Stack.prototype.isEmpty = function() {
    return this.items.length === 0
  }
  Stack.prototype.size = function() {
    return this.items.length
  }
  Stack.prototype.toString = function() {
    let resultString = ''
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' '
    }
    return resultString
  }
}
// 栈的使用
var s = new Stack()

s.push(20)
s.push(10)
s.push(30)
console.log(s)

s.pop()
console.log(s)
console.log(s.peek());
console.log(s.size());
console.log(s.toString());
