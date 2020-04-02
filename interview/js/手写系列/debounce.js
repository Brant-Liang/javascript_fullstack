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

let fn2 = debounce(() =>{ console.log(1);}, 500)

for(let i = 0; i < 100; i++) {
  fn2()
}