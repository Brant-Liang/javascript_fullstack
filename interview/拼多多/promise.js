const promiseTimeout = (promise, time) => {
  const tP = transPromise(time);
  return Promise.race([promise, tP]);
}

const transPromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('error'));
    }, time);
  })
}

const fun = (time) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('6666');
  }, time);
})

console.log(promiseTimeout(fun(1000), 300));
