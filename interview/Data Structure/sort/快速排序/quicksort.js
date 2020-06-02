// 快排
// function quickSort(arr, i, j) {
//   if(i >= j)  return;
//   if(i < j) {
//     let left = i;
//     let right = j;
//     let pivot = arr[left];
//     while(i < j) {
//       while(arr[j] >= pivot && i < j) {  // 从后往前找比基准小的数
//         j--;
//       }
//       if(i < j) {
//         arr[i++] = arr[j];
//       }
//       while(arr[i] <= pivot && i < j) {  // 从前往后找比基准大的数
//         i++;
//       }
//       if(i < j) {
//         arr[j--] = arr[i];
//       }
//     }
//     arr[i] = pivot;
//     quickSort(arr, left, i-1);
//     quickSort(arr, i+1, right);
//     return arr;
//   }
// }

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var pivotIdx = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIdx, 1)[0];
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } 
    else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

// example
let arr = [2, 10, 4, 1, 0, 9, 5, 2];
console.log(quickSort(arr));