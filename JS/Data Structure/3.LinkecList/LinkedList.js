// 封装链表类
function Linkedlist () {
  //内部类： 节点
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  // 属性
  //1、头部
  this.head = null;
  //2、链表长度
  this.length = 0

  //方法
  //1、append
  Linkedlist.prototype.append = function(data) {
    //创建新节点
    var newNode = new Node(data)
    //判断是否为第一个节点
    if(this.length == 0) { //是第一个
      this.head = newNode
    }
    //不是第一个，找到最后一个节点，
    //并将其的next指向新增的节点
    else{ 
      var current = this.head
      //找到最后一个节点（当current.next为空时）
      while(current.next) {
        current = current.next
      }
      //把最后一个next指向新增的节点
      current.next = newNode
    }
    //链表长度加一
    this.length += 1
  }
  //2、insert
  Linkedlist.prototype.insert = function(position, data) {
    //1、对position进行越界判断
    if(position < 0 || position > this.length) return false
    //2、创建node
    var newNode = new Node(data)
    //3、插入
    //3.1、插入head之后
    if(position == 0) {
      //顺序不能换，先让newNode指向this.head(即原来的第一个节点)，
      //再让head指向newNode
      //否则无法找到第一个节点的地址
      newNode.next = this.head
      this.head = newNode
    }
    //3.2、插入位置不是第一个
    else{
      var current = this.head
      //previous为current前一个节点
      var previous = null
      for (let i = 0; i < position; i++) {
        previous = current
        current = current.next   
      }
      //同上顺序不能换
      newNode.next = current
      previous.next = newNode
    }
    this.length += 1
  }
  //3、get
  Linkedlist.prototype.get = function(position) {
    //1、越界判断
    if(position < 0 || position >= this.length) return null
    var current = this.head
    for(let i = 0;i < position;i ++) {
      current = current.next
    }
    return current.data
  }
  //9、toString
  Linkedlist.prototype.toString = function() {
    //1、定义当前遍历位置的变量
    var current = this.head
    var resultString = ""
    //2、遍历整个链表
    while(current) {
      //将每个节点中的数据取出
      resultString += current.data + ' '
      current = current.next
    }
    return resultString
  }
}

//测试
//1、创建链表实例
var myLinkedList = new Linkedlist()

myLinkedList.append(11)
myLinkedList.append(22)
myLinkedList.insert(1, 15)
myLinkedList.insert(0, 5)
console.log(myLinkedList.toString());
console.log(myLinkedList.get(3))