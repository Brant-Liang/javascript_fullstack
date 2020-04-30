function solution (str) {
  const reg = /ac|b/g
  let strCopy = str
  do {
    str = strCopy
    strCopy = str.replace(reg, '')
  } while (strCopy !== str)
  return strCopy
}
/* 
function solution(str) {
  let countA = 0  // 连续a的个数
  let result = ''
  for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
          countA++
      } else if (str[i] === 'b') {
          continue
      } else if (str[i] === 'c') {
          if (countA === 0) {
              result += 'c'
          } else {
              countA--
          }
      } else {
          // 遇到其他字符，则保存的a需要释放
          while (countA) {
              result += 'a'
              countA--
          }
          result += str[i]
      }
  }
  // 最后需要释放所有保存的a
  while (countA) {
      result += 'a'
      countA--
  }
  return result
} */