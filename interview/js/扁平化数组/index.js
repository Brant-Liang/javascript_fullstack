function flattenDeep(arr) {
  return arr.reduce((pre,cur) => {
    return pre.concat(Array.isArray(cur) ? flattenDeep(cur) : cur);
  }, [])
}
console.log(flattenDeep([1, [[2], [3, [4]], 5]]));
