// 封装栈类
function Stack() {
  this.items = []
  //栈的相关操作
  //1、压栈
  //给对象实例添加方法 
  this.push = function(element) {
    this.items.push(element)
  }
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
  //4、判断栈是否为空
  Stack.prototype.isEmpty = function() {
    return this.items.length === 0
  }
  //5、返回栈中元素个数
  Stack.prototype.size = function() {
    return this.items.length
  }
  //6、以字符串形式输出
  Stack.prototype.toString = function() {
    let resultString = ''
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' '
    }
    return resultString
  }
  //7、
  Stack.prototype.clear = function() {
    return this.items = []
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

function dec2bin(decNumber) {
  //1、定义栈对象
  var stack = new Stack
  //2、循环操作
  while(decNumber > 0) {
    //获取余数
    stack.push(decNumber % 2)
    //获取整除后的结果
    decNumber = parseInt(decNumber / 2)
  }
  var binString = ''
  while(!stack.isEmpty()) {
    binString += stack.pop()
  }  
  return binString
}
console.log(dec2bin(100))