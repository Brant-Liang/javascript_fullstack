/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length % 2 === 1) return false
  let myStack = []
  s = s.split("")
  console.log(s);
  for(let item of s) {
    if(item === '(') myStack.push(')')
    else if(item === '[') myStack.push("]")
    else if(item === '{') myStack.push('}')
    else if(item !== myStack.pop()) return false
  }
  return !myStack.length
};

console.log(isValid("({})"))