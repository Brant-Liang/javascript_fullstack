// function findMostWord(article) {
//   if(!article) return

//   article = article.replace(/\s/g,"").toLowerCase()
//   console.log(article);
  
//   let wordList = article.match(/[a-z]/g)

//   let visited = [] //已经遍历过的字母
//   let maxLetter = ''
//   let maxNum = 0
  
//   //查找
//   wordList.forEach(item => {
//     if(visited.indexOf(item) < 0) {
//       visited.push(item)
//       let letter = new RegExp(item, "g")
//       let num = article.match(letter).length
//       if(num > maxNum) {
//         maxLetter = item,
//         maxNum = num
//       }
//     }
//   });
//   return maxLetter + ':' + maxNum
// }

// console.log(findMostWord('TThis are doTm treTe and reTal treTTe'));

function findMostNumber(numbers) {
  numbers.sort((a,b) => a - b);
  var num = numbers[Math.ceil(numbers.length / 2)]
  var a1 = numbers.indexOf(num); 
  var a2 = numbers.lastIndexOf(num);
  if(a2 - a1 + 1> Math.floor(numbers.length / 2)) return num;
  return 0
}
console.log(
  findMostNumber([1,2,3,2,2,2,5,4,2]));