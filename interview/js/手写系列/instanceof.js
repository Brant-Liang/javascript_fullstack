// function instanceOf(left, right) {
//   let proto = left.__proto__
//   let prototype = right.prototype
//   while(1) {
//     if(proto === null) return false
//     if(prototype === proto) return true
//     proto = proto.__proto__
//   }
// }

function instanceOf(left, right) {
  let proto = left.__proto__;
  let prototype = right.prototype;
  while(1) {
    if(proto === null) return false;
    if(prototype === proto) return true;
    proto = proto.__proto
  }
}
console.log(instanceOf(Object, Object));
