setTimeout(() => {
  console.log('setTimeout 1');
}, 0)

setTimeout(() => {
  console.log('setTimeout 2')
  Promise.resolve().then(() => console.log('Promise'))
}, 0) 
setTimeout(() => {
  console.log('setTimeout 3');
}, 0)

// Promise.resolve('123').then(data => console.log(123))
// process.nextTick(() => console.log('nextTick'))