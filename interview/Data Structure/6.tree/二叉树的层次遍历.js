function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var levelOrder = function(root) {
  let levels= []
  if(root == null || root.val == undefined) return levels
  var helper = function(node, level) {
    if(levels.length === level ){
      levels.push([])
    }
    levels[level].push(node.val)
    if(node.left !== null) {
      helper(node.left, level+1)
    }
    if(node.right !== null) {
      helper(node.right, level+1)
    }
    return levels
  }
  helper(root, 0)
  return levels
};
var levelOrder2 = function(root) {
  var queue = []
  var result = []
  var helper = function(node) {
    if(node) {
      result.push(node.val)
      if(node.left) {
        queue.unshift(node.left)
      }
      if(node.right) {
        queue.unshift(node.right)
      }
      helper(queue.pop())
    }
  }
  helper(root)
  return result
}
root1 = new TreeNode(3)
root1.left = new TreeNode(9)
root1.right = new TreeNode(20)
root1.right.left = new TreeNode(15)
root1.right.right = new TreeNode(7)
root2 = new TreeNode()
console.log(levelOrder(root1));
console.log(levelOrder2(root1));

