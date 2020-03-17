function LinkedList () {
  function Node(data) {
    this.data = data;
    this.next = null
  }
  this.head = null
  this.length = 0
  //方法
  LinkedList.prototype.append = function(data) {
    var newNode = new Node(data)
    if(this.length === 0) {
      this.head = newNode
    }else {
      var current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }
  //反转链表
  LinkedList.prototype.reverse = function() {
    if(this.length === 0 || this.length === 1) return LinkedList;
    else {
      var p1 = this.head
      var p2 = p1.next
      var p3 = p2.next
      while(p2) {
        p3 = p2.next
        p2.next = p1
        p1 = p2
        p2 = p3
      }
      this.head.next = null
      this.head = p1
    }
  }
  LinkedList.prototype.toString = function() {
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
var lst = new LinkedList()
lst.append('1')
lst.append('2')
lst.append('3')
lst.append('4')
lst.append('5')
lst.append('6')
lst.append('7')
lst.reverse()
console.log(lst.toString())
console.log(lst);