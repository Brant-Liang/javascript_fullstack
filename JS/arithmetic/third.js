//即按高位到低位的顺序搜索
//若各位数字递减，则删除最后一个数字，否则删除第一个递增区间的首字符
function getMaxNum(str, s) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] < str[i + 1]) {  //对字符串进行删除操作
      str = str.replace(str[i], "");
      i--;  //删除后、再从头开始遍历
      if (i >= 1) {
        i = 0;
      }
      s--;  //删除一个数 s - 1
      if (s <= 0) { // s = 0 则返回
        return str;
      }
    }
  }
  //如果将所有递增的较小的数删除完，还要删除的话，留下来的必定是从大到小排下来的字符串
  //从最后一位删除，删至s=0即可输出str
    for (let i = str.length - 1; i >= 0; i--) {
      str = str.replace(str[i], "") 
      s--;
      if (s <= 0) {
        return str;
      }
    }
}

var myStr = '46987654321';
var mS = 7;  // 
console.log(getMaxNum(myStr, mS));