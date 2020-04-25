Function.prototype._apply = function(context, rest) {
  if(!context) {
    context = typeof window === "undefined" ? global : window;
  }
  context.fn = this;
  let result;
  if(rest === undefined || null) {
    result = context.fn(rest)
  } else if(typeof rest === 'object') {
    result = context.fn(...rest);
  }
  delete context.fn;
  return result;
}

var foo = {
  name: 'Brant'
}
var name = 'Ariel';
function bar(job, age) {
  console.log(this.name);
  console.log(job, age);
}
bar._apply(foo, ['progremmer', 20]);
bar._apply(null,['progremmer', 20])