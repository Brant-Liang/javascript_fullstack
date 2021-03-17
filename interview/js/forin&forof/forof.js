// var arr = ['a', 'b', 'c', 'd', 'e'];
// var eArr = arr[Symbol.iterator]();
// console.log(eArr);
// // 浏览器必须支持 for...of 循环
// for (let letter of arr) {
//   console.log(letter);
// }

const newObj = { a: 1, b:2 , c: 3 }
newObj[Symbol.iterator] = function* (){
  let keys = Object.keys( this );
  console.log(keys);
  for(let i = 0, l = keys.length; i < l; i++){
      yield this[keys[i]];
  }
}

for(let v of newObj){
  console.log( v );
}
// 输出结果
// 5
// 6
