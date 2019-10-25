// 要得到零钱的个数最少，钱数y一定时 ， 则选币时选大面额的即可
function leastCoins(coinsValues, yTotalValue) {
   var remain = yTotalValue;  //剩余的放入的钱数
   var arr = [];
   for (let i = coinsValues.length - 1; i >= 0; i--) { // 从数组中最大的值开始（即币值最大的开始） 与 y进行比较，若如果大，则左移
      for (let j = 0; j < coinsValues.length; j++) {
         if (coinsValues[i] <= remain) { //
            remain -= coinsValues[i];
            arr.unshift(coinsValues[i]);
         }
         if (remain == 0) {
            return arr;
         }
      }
   }
}


function inputPN(arr, p, n) { //输入p 和 n 返回币值数组
   if (p <= 1) {
      return false;
   }
   for (let i = 0; i <= n; i++) {
      arr[i] = Math.pow(p, i)
   }
   return arr;
}
var coinsVales = [];
var myCoinsVales = inputPN(coinsVales, 3, 10);
console.log(myCoinsVales);
var myTotalValue = 4000;
console.log(leastCoins(myCoinsVales, myTotalValue));
