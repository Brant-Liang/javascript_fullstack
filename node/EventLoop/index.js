// setTimeout(() => {
//   console.log(1)
//   Promise.resolve(3).then(data => console.log(data))
// }, 0) 
// setTimeout(() => {
//   console.log(2);
// }, 0)

Promise.resolve('123').then(data => console.log(123))
process.nextTick(() => console.log('nextTick'))