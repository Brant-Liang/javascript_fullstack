function bubbleSort(arr) {
  var n = arr.length;
  var temp = null;
  for(let i = 0; i < n - 1; i++) {
    for(let j = 0; j < n - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort([6,7,5,12,34,3,5]));