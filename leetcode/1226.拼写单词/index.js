/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let length = 0
  let flag = false
  words.forEach((item, index1) => {
    let charsArr = chars.split("")
    item = item.split("")
    for(let letter of item) {
      if(charsArr.indexOf(letter) === -1) {
        flag = false;
        break
      }else{
        charsArr.splice(charsArr.indexOf(letter), 1)
        if(chars.length - charsArr.length === item.length){
          flag = true
          break
        }
      }
    }
    if(flag)
      length += item.length
    flag = false
  })
  return length
};

let words = ["cat","bt","hat","tree"] 
let chars = "atach"
words = ["hello","world","leetcode"],
chars = "welldonehoneyr"
console.log(countCharacters(words, chars));