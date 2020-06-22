var moveZeroes = function(num) {
  if(num.length === 0 || num.length === 1) return num;
  var j = 0;
  for(var i = 0; i < num.length; i++) {
    if(num[i] !== 0) {
      num[j] = num[i];
      j++;
    }
  }
  for(i = j; i < num.length; i++) {
    num[i] = 0;
  }
  return num;
}

var nums1 = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums1));