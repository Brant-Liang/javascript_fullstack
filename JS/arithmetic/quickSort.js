var arr = [9, 8, 7, 6, 5, 4];
// 选择
// for(var i = 0; i < arr.length; i++){
//     for(var j = i + 1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// 快速排序
/**
 * 1、选择一个元素作为基准
 * 2、所有小于基准的元素移到左边 大于移到右边
 * 3、对基准两边的子集重复1、2
 */
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }
//     let mid = parseInt(arr.length / 2)
//     let pivot = arr.splice(mid, 1)[0]
//     let left = [], right = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat([pivot],quickSort(right))
// }
// console.log(quickSort(arr));


function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = parseInt(arr.length / 2);
  let pivot = arr.splice(mid, 1)[0];
  let left = [], right = [];
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] < pivot) {
          left.push(arr[i]);
      } 
      else {
          right.push(arr[i]);
      }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
console.log(quickSort(arr));