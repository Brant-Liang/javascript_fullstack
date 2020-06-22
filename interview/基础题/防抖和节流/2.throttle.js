function throttle(fn) {
  let flag = true;
  return function () {
    if (!flag) {
      return;
    }
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, 1600)
  }
}