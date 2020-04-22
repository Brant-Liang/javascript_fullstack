/* 广度优先遍历 */

function bfs(root) {

}
/* 深度优先遍历 */
function dfs(node) {
  if(node == null) return;
  const queue = [node];
  while(queue.length > 0) {
    const first = queue.shift();
    console.log(first.value);
    queue.push(first.left);
    queue.push(first.right);
  }
}