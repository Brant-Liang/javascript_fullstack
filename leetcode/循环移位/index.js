// [1, 2, 3, 4, 5, 6, 7] k=2
// 7 1 2 3 4 5 6
// 6 7 1 2 3 4 5
// 5 6 7 1 2 3 4

// function cyclicShift (list, k) {
//   const copy = [...list];
//   const n = list.length
//   if (k % n === 0) {
//     return list;
//   }
//   for(let i = 0; i < n; i++){
//     list[i] = copy[(k + i) % n]
//   }
//   return list
// }
// var list = [-1, -100, 3, 99], k = 2
// console.log(cyclicShift(list, k));

// O(1)
// function cyclicShift (list, k) {
//   const n = list.length
//   if (k % n === 0)
//     return list
//   let cnt = Math.abs(k > 0 ? k % n : n + (k % n))
//   let t = null;
//   while(cnt--) {
//     t = list[n - 1];
//     list.pop();
//     list.unshift(t);
//   }
//   return list
// }
// var list = [-1, -100, 3, 99], k = 2
// console.log(cyclicShift(list, k));


// 三次翻转法
// [0, n-k-1]
// [n-k, n-1]
// [0, n-1]
function reverse(list, start, end) {
  let t = null;
  while (start < end) {
    t = list[start];
    list[start] = list[end]
    list[end] = t;
    start++;
    end--;
  }
}
function cyclicShift(list, k) {
  const n = list.length;
  if (k % n === 0) {
    return list;
  }
  reverse(list, 0, n-k-1)
  reverse(list, n-k, n-1)
  reverse(list, 0, n-1)
  return list
}
var list = [1, 2, 3, 4, 5, 6, 7], k = 2
console.log(cyclicShift(list, k));

