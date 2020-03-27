function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var getRes = function (left, right) {
  if (left === null && right === null) {
    return true;
}
if (left === null || right === null) {
    return false;
}
return left.val === right.val && getRes(left.left, right.right) && getRes(left.right, right.left);
}
var isSymmetric = function(node) {
  if(node === null) return true
  return getRes(node.left, node.right)
};
root1 = new TreeNode(1)
root1.left = new TreeNode(2)
root1.left.left = new TreeNode(3)

root1.right = new TreeNode(2)
root1.right.left = new TreeNode(3)
console.log(isSymmetric(root1));