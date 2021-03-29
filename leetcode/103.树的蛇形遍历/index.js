/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var a10 = 0;
  var b10 = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    a10 += (a[i] * 2 ** i)
  }
  for (let j = b.length - 1; j >= 0; j--) {
    b10 += (b[j] * 2 ** j)
  }
  return (a10 + b10).toString(2);
};

console.log(addBinary('111', '1'));
