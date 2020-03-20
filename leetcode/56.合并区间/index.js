/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length === 0) return []
  var merged = []
  intervals.sort((a, b) => a[0] - b[0])
  merged.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    if(merged[merged.length-1][1] >= intervals[i][0]) {
      if(intervals[i][1] >= merged[merged.length-1][1]) {
        merged[merged.length-1][1] = intervals[i][1]
      }
    }else {
      merged.push(intervals[i])
    }
  }
  return merged
};

var test = []
console.log(merge(test)); 