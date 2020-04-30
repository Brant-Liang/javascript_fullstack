/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const meno = [];
  meno[1] = 1;
  meno[2] = 2;
  for(var i = 3; i < n; i ++) {
    meno[i] = meno[1] + meno[2];
  }
  return meno[n]
};