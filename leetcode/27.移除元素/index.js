/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if(nums.length === 0) return 0;
  var length = 0
  nums.forEach((item, index) => {
    if(item !== val) {
      nums[length] = nums[index]
      length++
    }
  })
  return length
};

console.log(removeElement([3,2,2,3], 3));