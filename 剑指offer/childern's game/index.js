function LastRemaining_Solution(n, m)
{
  if(m <= 0 || n<= 0) return -1
  // 队列
  //小朋友 0 ~ n - 1
  let childrens = []
  for (let i = 0; i < n; i++) { 
    childrens.push(i)
  }
  while(childrens.length > 1) { //只剩最后一个人结束游戏
    for (let i = 0; i < m - 1; i++) {
      childrens.push(childrens.shift())
    }
    childrens.shift()
  }
  return childrens[0]
}

console.log(LastRemaining_Solution(45,495))