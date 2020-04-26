function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
var maxDepth = function(root) {
  if(root == null) return 0;
  let deep = 0;
  let queue = [root];
  while(queue.length) {
    let n = queue.length;
    for(let i = 0; i < n; i++) {
      var front = queue[0]
      queue.shift()
      if(front.left) {
        queue.push(front.left)
      }
      if(front.right){
        queue.push(front.right)
      } 
    }
    deep++;
  }
  return deep;
};
function maxDepth2(root) {
  if(!root) return 0;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  let childrenDepth = Math.max(leftDepth, rightDepth);
  return childrenDepth + 1;
}
root1 = new TreeNode(3)
root1.left = new TreeNode(9)
root1.right = new TreeNode(20)
root1.right.left = new TreeNode(15)
root1.right.right = new TreeNode(7)
console.log(maxDepth2(root1));