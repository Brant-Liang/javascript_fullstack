const timeMap = {};
let id = 0;
const mySetInterval = (cb, time) => {
  let timeId = id;
  id++;
  const fn = () => {
    cb();
    timeMap[timeId] = setTimeout(() => {
      fn()
    }, time)
  }
  timeMap[timeId] = setTimeout(fn, time);
  return timeId;
}

const intervalId = mySetInterval(() => {
  console.log(new Date());
}, 1000)
console.log(intervalId);

const myClearInterval = (id) => {
  clearTimeout(timeMap[id]);
  delete timeMap[id];
}

setTimeout(() => {
  myClearInterval(intervalId);
}, 3000)
