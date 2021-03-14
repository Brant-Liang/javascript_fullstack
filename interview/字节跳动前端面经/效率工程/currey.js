const repeatFunc = repeat(console.log, 4, 3000)

function repeat (func, times, await) {
  return (...rest) => {
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        func(...rest)
      }, await * i);
    }
  }
}

repeatFunc('hello world');