function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var levelOrder = function(root) { 
  if(root === null) return null;
  var res = [];
  var queue = [root];
  while(queue.length > 0) {
    var front = queue[0]
    res.push(front.val);
    queue.shift();
    if(front.left) {
      queue.push(front.left)
    }
    if(front.right) {
      queue.push(front.right)
    }
  }
  return res;
}
root1 = new TreeNode(3)
root1.left = new TreeNode(9)
root1.right = new TreeNode(20)
root1.right.left = new TreeNode(15)
root1.right.right = new TreeNode(7)
root2 = new TreeNode()
console.log(levelOrder(root1));


