var a = function() {
  this.b = 3;
}
var c = new a();
a.prototype.b = 9;
var b = 7;
a();
console.log(b);  //3
console.log(c.b); 