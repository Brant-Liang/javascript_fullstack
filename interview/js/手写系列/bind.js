Function.prototype._bind = function(ctx, ...arg) {
  var fn = this;
  return function() {
    fn.apply(ctx, arg)
  }
}