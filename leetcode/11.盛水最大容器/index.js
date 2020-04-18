/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var max = 0;
  var n = height.length;
  for(var i = 0; i < n; i++) {
    for(var j = i + 1; j < n; j++) {
      var width = j - i;
      if(width*(Math.min(height[i], height[j])) > max) {
        max = width*(Math.min(height[i], height[j]));
      }
    }
  }
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));