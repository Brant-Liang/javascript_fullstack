/**
 * @param {number[]} nums
 * @return {number}
 */
var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var maxSubArray = function(nums) {
  let max = -Infinity;
  let thisSum;
  for(let i = 0; i < nums.length; i++) {
    thisSum = 0;
    for(let j = i; j < nums.length; j++) {
      // end: j  start: i
      thisSum += nums[j]
      if(thisSum > max) {
        max = thisSum
      }
    }
  }
  return max;
};
console.log(maxSubArray(arr));