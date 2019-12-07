const debounce = function (fn, delay) {
  let timmer = null
  return (...args) => {
    clearTimeout(timmer)
    timmer = setTimeout (() => {
      fn.apply(this, ...args)
    } , delay)
  }
  
}

test = function () {
  console.log(123);
}
debounce(test, 500)