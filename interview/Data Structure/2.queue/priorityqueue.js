//封装
function PriorityQueue() {

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  //属性
  this.items = []

  //方法
  //1 插入
  PriorityQueue.prototype.enqueue = function(element, priority) {
    //创建QueueElement对象
    var queueElement = new QueueElement(element, priority)
    if(this.items.length === 0) {
      this.items.push(queueElement)
    }
    else{
      var added = false
      for (let i = 0; i < this.items.length; i++) {
        if(queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if(!added) {
        this.items.push(queueElement)
      }
    }
    
  }
    //2、删除前端元素
  PriorityQueue.prototype.dequeue = function() {
    return this.items.shift()
  }
  //3、判断是否为空
  PriorityQueue.prototype.isEmpty = function() {
    return this.items.length === 0
  }
  //4、查看第一个元素
  PriorityQueue.prototype.front = function() {
    return this.items[0]
  }
  //5、返回对列元素个数
  PriorityQueue.prototype.size = function() {
    return this.items.length
  }
  //6、以字符串形式输出
  PriorityQueue.prototype.toString = function() {
    let resultString = ''
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' '
    }
    return resultString
  }
}

var pq = new PriorityQueue()

pq.enqueue('nba', 1)
pq.enqueue('cba', 0)
pq.enqueue('aba', 3)
console.log(pq);