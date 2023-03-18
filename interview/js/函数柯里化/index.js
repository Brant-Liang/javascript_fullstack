function curry(fn, args) {
  var length = fn.length;
  var args = args || [];
  return function() {
    console.log(arguments)
    newArgs = args.concat(Array.prototype.slice.call(arguments));
    console.log(newArgs);
    if(newArgs.length < length) {
      return curry.call(this,fn,newArgs);
    } else {
      return fn.apply(this,newArgs);
    }
  }
}

function multiFun(a,b,c) {
  return a * b * c;
}

var multi = curry(multiFun);

console.log(multi(2)(3)(4)); 


const curry2 = (fn, arr=[]) => (...args) => (
  arg => args.length === fn.length
  ? fn(...arg)
  : curry(fn, arg)
)([...arr,...args])
