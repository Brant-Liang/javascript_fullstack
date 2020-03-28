function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var invertTree = function(root) {
  if(root) {
    let temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
  }
  return root
};

root1 = new TreeNode(1)
root1.left = new TreeNode(2)
root1.left.left = new TreeNode(3)

root1.right = new TreeNode(2)
root1.right.left = new TreeNode(3)

console.log(invertTree(root1));