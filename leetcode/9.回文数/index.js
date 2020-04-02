/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false
  if(x === 0) return true
  if(x > 0) {
    let x2 = x.toString()
    x2 = parseInt(x2.split("").reverse().join(""))
    if(x === x2) return true
    return false
  }
};

console.log(isPalindrome(121));
