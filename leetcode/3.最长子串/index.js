/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const set = new Set();
  var j = 0, maxLength = 0;
  if(s.length === 0) {
    return 0;
  }
  for(var i = 0; i< s.length; i++) {
    if(!set.has(s[i])){
      set.add(s[i]); 
      maxLength = Math.max(maxLength, set.size);
    }else {
      while(set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));