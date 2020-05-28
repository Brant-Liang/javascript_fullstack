var arr = ['1', ['2', [{ name: '2' }, 4, 2], 2], 5, [6]];

function getArray(arr) {
  return arr.reduce((pre, cur) => {
    if(Object.prototype.toString.call(cur).slice(8, -1) === 'String') {
      cur = Number(cur);
      return pre.concat(Array.isArray(cur) ? getArray(cur) : cur)
    }
    else if(Object.prototype.toString.call(cur).slice(8, -1) === 'Object') {
      return pre;
    }
    else {
      return pre.concat(Array.isArray(cur) ? getArray(cur) : cur)
    }
  }, [])
}

console.log(getArray(arr));