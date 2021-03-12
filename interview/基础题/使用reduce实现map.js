array.reduce(function(total, currentValue, currentIndex, arr){
  total // 上一次循环体内返回的值
        // 如果指定 initialValue，则第一次循环的total为initialValue，    
        // 否则为array的第一个元素
  currentValue // 当前的元素
        // 如果指定 initialValue，则第一次循环的 currentValue 为 array的第一个元素，    
        // 否则为array的第二个元素
  currentIndex   //currentValue 的索引
  arr   // 当前遍历的数组
}, initialValue);


Array.prototype._map = function(fn, callbackThis) {
  const res = [];
  let cbThis = callbackThis || null;
  this.reduce((pre, cur, idx, arr) => {
    // 传入map回调函数拥有的参数
    // 把每一项的执行结果push进res中
    res.push(fn.call(CBThis, after, idx, arr));
  }, null);
  return res;
}