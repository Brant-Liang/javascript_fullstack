function add1(str1, str2) {
  var a = parseInt(str1, 36)
  var b = parseInt(str2, 36)
  return (a + b).toString(36)
}
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function add(str1, str2) {
  let a = str1.split('');
  let b = str2.split('');
  let alength = a.length;
  let blength = b.length;
  let m = Math.max(a.length, b.length)
  let inc = 0 
  let res = ''
  for (let i = 0; i < m; i++) {
    let ia = i < alength ? chars.indexOf(a[alength - i - 1]) : 0
    let ib = i < blength ? chars.indexOf(b[blength - i - 1]) : 0
    let sum = ia + ib + inc
    if(sum > 36) {
      inc = 1
    }else {
      inc = 0
    }
    res = chars.charAt(sum % 36) + res
  }
  if(inc === 1) {
    res = 1 + res
  }
  return res
}

function _10to36_(num) {
  let res = "";
  if (num === 0) {
    return "0";
  }
  while(num > 0) {
    res = chars[num % 36] + res;
    num = Math.floor(num / 36)
  }
  return res
 }

function _36to10_(res) {
  let num = 0;
  res = res.split("")
  let n = res.length
  for (let i = 0; i < n; i++) {
    //最后一位 
    num += chars.indexOf(res[i]) * Math.pow(36, n - i - 1)
  }
  return num
}
console.log(_10to36_(48));
console.log(_36to10_('1C'));
console.log(add('11X', '2B') === add1('11X', '2B'));
