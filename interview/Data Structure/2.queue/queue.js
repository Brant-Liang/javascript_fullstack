function Queue() {
  // 属性
  this.items = []
  //方法
  //1、添加一项
  Queue.prototype.enqueue = function (element) {
    this.items.push(element)
  }
  //2、删除前端元素
  Queue.prototype.dequeue = function() {
    return this.items.shift()
  }
  //3、判断是否为空
  Queue.prototype.isEmpty = function() {
    return this.items.length === 0
  }
  //4、查看第一个元素
  Queue.prototype.front = function() {
    return this.items[0]
  }
  //5、返回对列元素个数
  Queue.prototype.size = function() {
    return this.items.length
  }
  //6、以字符串形式输出
  Queue.prototype.toString = function() {
    let resultString = ''
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' '
    }
    return resultString
  }
}
//使用对列
var queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)

// console.log(queue)
// queue.dequeue()
// console.log(queue)
// console.log(queue.front())
// console.log(queue.size())
// console.log(queue.toString());
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// console.log(queue.isEmpty())

//击鼓传花
function passGame(nameList, num) {
  //1、创建一个对列
  var myQueue = new Queue()
  //2、将所有人依次加入到对列
  for (let i = 0; i < nameList.length; i++) {
    myQueue.enqueue(nameList[i])
  }
  console.log(myQueue.size());
  while(myQueue.size() > 1) {
    //3、开始数数字，不是就加入到末尾，是则取出
    //num之前的人直接放到后面
    for (let i = 0; i < num - 1; i++) {
     myQueue.enqueue(myQueue.dequeue())
    }
    myQueue.dequeue()
  }
  //4、获取胜利者
  console.log(myQueue.front)
  return nameList.indexOf(myQueue.front() + 1)
}
console.log(passGame(['Ariel', 'Brant', 'Caven', 'Daisy', 'Eva'], 3))