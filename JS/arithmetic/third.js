function getMaxNum(str, s){ 
  var numLen = str.length - s;
  var arr = []; //储存字符串
  var maxNumArr = []; //储存输出的最大数
  for(let i = 0; i < s + 1; i++){ //找倒数第s + 1及之前的最大数，先把 1 ~ s + 1 中的数储存到数组中
    arr.push(str[i]);
  }
  arr.sort((a, b) => b - a);  //降序排序
  var max = arr[0];           //取最大值
  maxNumArr.push(max);        //把最大值放在最左边
  var maxIdx = str.indexOf(max); //找到可取的最大值在字符串中的下标
  numLen --;
  return str.substring(maxIdx + 1, str.length) // 2 - 7
}
var myStr = '178536498762';
var mS = 8;  //  12 - 4 = 8 
console.log(getMaxNum(myStr,mS));