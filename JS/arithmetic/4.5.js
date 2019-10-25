// n个文件  第i个文件需要pi个字节空间
//(1) 要存入的文件数最多，所以存入的文件的字节一定要比没存入的要小
function quickSort(arr) {
   if (arr.length <= 1) {
      return arr;
   }
   var nowNober = arr.splice(Math.floor(arr.length / 2), 1);  //取得数组中间的值
   var leftArr = [];
   var reightArr = [];
   for (var i = 0; i < arr.length; i++) {
      if (parseInt(arr[i]) <= nowNober) {
         leftArr.push(arr[i]);                              //把比中间值小的放一个数组
      } else {
         reightArr.push(arr[i]);                            //把比中间值大的放另一个数组
      }
   }
   return quickSort(leftArr).concat(nowNober, quickSort(reightArr))
}

const mostFiles = (arrFiles, C) => { 
   var sum = 0;
   var sortArr = quickSort(arrFiles);
   for (let i = 0; i < sortArr.length; i++) {
      sum += sortArr[i];
      if(sum > C){      //把文件从小到大放入，直到放不下为止
         sum -= sortArr[i];
         return i;
      }
   }
}
var myArrFiles = [11, 5, 7, 22, 21, 9, 1];  // 1 5 7 9 11 21 22
console.log('最多存入的文件数量为 ' + mostFiles(myArrFiles, 40));

//(2) 存入后的剩余空间最小 min(C - sum)要达到最小值 最后存最小值
// var leastSpace = function(arrFiles, C){
//    var sum = 0;
//    for(let i = 0; i < arrFiles.length; i++){
//       sum += arrFiles[i];
//       if(sum > C){
//          sum -= arrFiles[i];
//          arr.unshift(arrFiles[i]);
//       }
//    }
// }
