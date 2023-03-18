console.log(typeof A);
console.log(typeof B);

function A() {
  return 'A';
}

const obj = {};
const obj2 = {};
var B = function () {
  return obj;
}

console.log(new B() === obj);
console.log(B() === obj);

const a = [];
console.log(Array.isArray(a));
console.log(a instanceof Array);
