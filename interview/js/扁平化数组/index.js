function flattenDeep(arr) {
  return arr.reduce((pre,cur) => {
    return pre.concat(Array.isArray(cur) ? flattenDeep(cur) : cur);
  }, [])
}
console.log(flattenDeep([1, [[2], [3, [4]], 5]]));
console.log(['1', ['2', [{ name: '2' }, 4, 2], 2], 5, [6]].toString().split(','));