function BinarySearchTree() {
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  //属性
  this.root = null
  //方法
  //1、insert(key)插入一个新的键
  BinarySearchTree.prototype.insert = function(key) {
    //1、创建节点
    var newNode = new Node(key)
    //2、判断根节点有无
    if(this.root === null) {
      this.root = newNode
    }else{
      this.insertNode(this.root, newNode)
    }
  }
  BinarySearchTree.prototype.insertNode = function(node, newNode) {
    if(node.key > newNode.key) { //向左查找
      if (node.left === null) {
        node.left = newNode
      }
      else {
        this.insertNode(node.left, newNode)
      }
    }
    else {
      if (node.right === null) {
        node.right = newNode
      }
      else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  //2、search(key): 在树中查找一个键，如果有返回true

  //3、midOrderTraversal: 中序遍历 左根右
  BinarySearchTree.prototype.midOrderTraversal = function() {
    this.midOrderTraversalNode(this.root)
  }
  BinarySearchTree.prototype.midOrderTraversalNode = function(node) {
    if(node != null) {
      this.midOrderTraversalNode(node.left)
      console.log(node.key);
      this.midOrderTraversalNode(node.right)
    }
  }
  //4、preOrderTraversal: 先序遍历 根左右
  BinarySearchTree.prototype.preOrderTraversal = function() {
    this.preOrderTraversalNode(this.root)
  }
  BinarySearchTree.prototype.preOrderTraversalNode = function(node) {
    if(node != null) {
      console.log(node.key);
      this.preOrderTraversalNode(node.left)
      this.preOrderTraversalNode(node.right)
    }
  }

  //5、postOrderTraversal: 后序遍历 左右根
  BinarySearchTree.prototype.postOrderTraversal = function() {
    this.postOrderTraversalNode(this.root)
  }
  BinarySearchTree.prototype.postOrderTraversalNode = function(node) {
    if(node != null) {
      this.postOrderTraversalNode(node.left)
      this.postOrderTraversalNode(node.right)
      console.log(node.key);
    }
  }
  //6、max/min
  BinarySearchTree.prototype.max = function() {
    var node = this.root
    var max
    while(node !== null){
      max = node.key
      node = node.right
    }
    return max
  }
  BinarySearchTree.prototype.min = function() {
    var node = this.root
    let min
    while(node !== null) {
      min = node.key
      node = node.left
    }
    return min
  }
}

var bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(5)
bst.insert(9)
bst.insert(15)
bst.insert(3)
bst.insert(6)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
// bst.midOrderTraversal()
// bst.preOrderTraversal()
bst.postOrderTraversal()
console.log(bst.max());
console.log(bst.min());
console.log(bst);