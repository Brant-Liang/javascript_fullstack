export function debounce (func, delay) {
  let timer 
  return function (...args) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      //防止this作用域被修改
      func.apply(this, args)
    }, delay)
  }
}

export function findIndex (list, song) {
  // 
  return list.findIndex((item) => {
    return item.id = song.id
  })
}