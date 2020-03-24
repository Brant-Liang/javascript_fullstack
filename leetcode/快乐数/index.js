/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if(n <= 0) { return false}
  if(n === 1) { return true}
  numArr = n.toString().split('').map(_=> +_)
  let temp = numArr[0] * numArr[0]
  for(let i = 1; i < numArr.length; i++) {
    temp += Math.pow(numArr[i], 2) 
  }
  console.log(temp);
  if(temp === 1) {
    return true
  }
  //4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4
  if(temp === 4){
    return false;
  }
  return isHappy(temp)
};

console.log(isHappy(9))