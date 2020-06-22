function deepclone(obj) {
  if(test(obj) !== "object") {
    return obj;
  }
  else {
    let res = {}
    for(let key in obj) {
      let value = target[key]
      if (test(obj[key]) !== "object") {
        res[key] = deepclone(value)
      } else {
        res[key] = value;
      }
    }
  }
}
function test(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}