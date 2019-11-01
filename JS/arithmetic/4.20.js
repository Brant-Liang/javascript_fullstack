// 把最小的r最后再买，最大的先买
var r = [2, 3, 4, 5, 6];
var myR = quickSort(r);
//二分排序
function quickSort(arr) {
  if (arr.length <= 1) {
     return arr;
  }
  var nowNober = arr.splice(Math.floor(arr.length / 2), 1);  //取得数组中间的值
  var leftArr = [];
  var reightArr = [];
  for (var i = 0; i < arr.length; i++) {
     if (parseInt(arr[i]) >= nowNober) {
        leftArr.push(arr[i]);                              //把比中间值大的放一个数组
     } else {
        reightArr.push(arr[i]);                            //把比中间值小的放另一个数组
     }
  }
  return quickSort(leftArr).concat(nowNober, quickSort(reightArr))
}
function minCost(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], i+1) * 1000;
  }
  return sum;
}
console.log(minCost(myR));


