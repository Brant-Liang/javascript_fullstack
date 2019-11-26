var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var maxSubArray = function(nums) {
  let max = -Infinity;
  let sum = 0;
  for(let num of arr) {
    if (sum < 0) {
      sum = 0;
    }
    sum += num
    max = Math.max(max, sum)
  }
  return max;
};
console.log(maxSubArray(arr));