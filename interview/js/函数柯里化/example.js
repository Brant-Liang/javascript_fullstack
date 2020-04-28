console.log(add(1)(2)(3,4).value()); 

function add(...nums) {
  console.log(nums);
  let curry = function(...out) {
    console.log(out);
    return add.apply(this, [...nums,...out])
  }
  curry.value = function () {
    return nums.reduce((pre, cur) => {
      return pre+cur;
    })
  }
  return curry
}

var q = new Queue()
q.task(1000, function () {
  console.log(1);
}).task(2000, function () {
  console.log(2);
}).start()

function Queue() {
  this.queue = [];
  this.task = (time, fn) => {
    this.queue.push({fn, time})
    return this
  },
  this.start = () => {
    let defer = 0;
    this.queue.forEach((item) => {
      defer += item.time;
      setTimeout(item.fn, defer)
    })
  }
}