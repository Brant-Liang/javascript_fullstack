function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, ...args)
    }, delay)
  }
}
var test = function () {
  console.log(1);
}
for (let i = 0; i < 100; i++) {
  debounce(test, 2000)
}