function findMostWord(article) {
  if(!article) return

  article = article.replace(/\s+/g,"").toLowerCase()
  console.log(article);
  
  let wordList = article.match(/[a-z]/g)

  let visited = [] //已经遍历过的字母
  let maxLetter = ''
  let maxNum = 0
  
  //查找
  wordList.forEach(item => {
    if(visited.indexOf(item) < 0) {
      visited.push(item)
      let letter = new RegExp(item, "g")
      let num = article.match(letter).length

      if(num > maxNum) {
        maxLetter = item,
        maxNum = num
      }
    }
  });
  return maxLetter + ':' + maxNum
}

console.log(findMostWord('TThis are doTm treTe and reTal treTTe'));