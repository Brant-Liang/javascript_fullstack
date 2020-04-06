function selectSort(arr) {
  var n = arr.length;
  var temp = null;
  for(let j = 0; j < n - 1; j++) {
    var min = j;
    for (let i = min + 1; i < n; i++) {
      if(arr[min] > arr[i]) {
        min = i;
      }
    }
    temp = arr[min]
    arr[min] =arr[j]
    arr[j] = temp
  }

  return arr
}

console.log(selectSort([6,7,5,12,34,3,5]));