function insertionSort (arr) {
  var n = arr.length

  //外层循环：从第1个位置开始获取数据，向前面的局部有序进行插入
  for (let i = 1; i < n; i++) {
    // 获取i位置的元素，和前面的数据一次进行比较
    var temp = arr[i]
    var j = i
    while(arr[j - 1] > temp && j > 0) {
      arr[j] = arr[j - 1];
      j--;
    }
    //将j位置的数据，放置temp即可
    arr[j] = temp
  }
  return arr
}
console.log(insertionSort([6,7,5,12,34,3,5]));