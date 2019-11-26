/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let thisSum;
    for(let i = 0; i < nums.length; i++) {
      for(let j = i; j < nums.length; j++) {
        // end: j  start: i
        thisSum = 0;
        for(let k = i; k <= j ;k++) {
          thisSum += nums[k]
        }
        if(thisSum > max) {
          max = thisSum
        }
      }
    }
    return max;
};
var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(arr));
 
