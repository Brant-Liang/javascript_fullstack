/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var result = [];
  var queue = []
  if(root === null || root.val === undefined) return result;
  var helper = function(node) {
    if(node) {
      result.push(node.val);
      if(node.left) {
        queue.unshift(node.left)
      }
      if(node.right) {
        queue.unshift(node.right)
      }
      helper(queue.pop())
    }
  }
  helper(root);
  return result;
};

root1 = new TreeNode(3)
root1.left = new TreeNode(9)
root1.right = new TreeNode(20)
root1.right.left = new TreeNode(15)
root1.right.right = new TreeNode(7)
console.log(levelOrder(root1));