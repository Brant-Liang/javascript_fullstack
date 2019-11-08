//即按高位到低位的顺序搜索
//若各位数字递减，则删除最后一个数字，否则删除第一个递增区间的首字符
function getMaxNum(str, s){ 
  var numLen = str.length - s; //找到 位数为numLen的最大数
  var arr=[]; //对字符串进行删除操作
  for(let i = 0; i < str.length; i++){ 
    if(str[i] < str[i + 1]){
      arr.push(str[i]);
      s--;
    }
    for(let j = 0; j <= arr.length; j++){
      str = str.replace(arr[j], "");
    }
    if(s <= 0){
      return str;
    }
  }
  
  return str;
}
var myStr = '178536498762';
var mS = 8;  //  12 - 4 = 8 
console.log(getMaxNum(myStr,mS));