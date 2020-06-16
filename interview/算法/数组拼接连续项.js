// [1, 2, 3, 6, 8, 9] => ["1-3", 6, "8-9"]
function solution(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;
  const result = [];
  let start = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 === arr[i + 1]) {0
      if(arr[i + 1] + 1 !== arr[i + 2])
        result.push(start + "-" + arr[i + 1])
    } else {
      if(i === 0) {
        result.push(arr[0]);
      }
      if (arr[i + 1] + 1 !== arr[i + 2]) {
        result.push(arr[i + 1]);
      } else {
        start = arr[i + 1];
      }
    }
  }
  return result;
}
console.log(solution([1, 2, 3, 4, 6, 8, 9, 10, 11, 13]));