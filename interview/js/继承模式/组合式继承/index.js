function Supper() {
  this.supProp = 'Supper property'
}
function Sub() {
  Supper.call(this);
  this.subProp = 'Sub property'
}

Sub.prototype = new Supper()