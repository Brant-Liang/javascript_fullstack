var myA = [15, 9, 1, 2, 5, 3, 4, 9];
var myB = [15, 1, 3, 4, 2, 9];
function isChild(a, b) {
  for (let i = 0; i < b.length; i++) {
    if(a.indexOf(b[i]) == -1){  // 如果在myA中找不到myB的元素
      return false;
    }
  }
  return true;
}

console.log(isChild(myA,myB));
