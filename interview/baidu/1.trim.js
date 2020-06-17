var str = "       2331    ";
String.prototype.trim2 = function (str) {
  if(str === "left") {
    let res = this.replace(/^\s+/ ,"")
    return res;
  }
  if(str === "right") {
    let res = this.replace(/\s+$/ ,"")
    return res;
  }
}
str = str.trim2("left")
console.log(str);