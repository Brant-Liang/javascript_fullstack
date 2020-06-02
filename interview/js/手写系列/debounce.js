function debounce(fn, delay) {0
  let timer = null
  return function(...args) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() =>{
      fn.apply(this, args)
    }, delay)
  }
}

function throttle(func, delay) {
  let flag = true;
  return function(...args) {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      flag = true;
      func.apply(this, args)
    }, delay);
  }
}

// function throttle (func, wait) {
//   var context, args;
//   var previous = 0;

//   return function() {
//     var now = new Date();
//     context = this;
//     args = arguments;
//     if(now - previous > wait) {
//       func.apply(context, args);
//       previous = now;
//     }
//   }
// }

let fn2 = debounce(() =>{ console.log(1);}, 500)

for(let i = 0; i < 100; i++) {
  fn2()
}