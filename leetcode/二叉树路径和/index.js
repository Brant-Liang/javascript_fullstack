// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} target
//  * @return {number[][]}
//  */
// var pathSum = function(root, target) {
//   const res = []; // 结果
//   let path = [];  // 路径和
//   function helper (root, target) {
//     if(root === null) return;
//     path.push(root.val);
//     target -= root.val;
//     if (target === 0 && (!root.left && !root.right)) {
//       res.push(path);
//     }
//     helper(root.left, target);
//     helper(root.right, target);
//     path.pop();
//   }
//   helper(root, target);
// };

function getSum(n, m) {
  let sum = n;
  let a = n;
  for (let i =0; i < m - 1; i++) {
      a = Math.sqrt(a);
    sum += a;   
  }
  return sum.toFixed(2);
}

console.log(getSum(0,3));