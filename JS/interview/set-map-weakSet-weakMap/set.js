var a = new Set() // 类数组，成员的值是唯一的

// Array.from([2, 3, 4, 5, 6, 4, 3, 2, 3]).forEach(x => a.add(x))

// for (let i of a) {
//   console.log(i);
  
// }

// const items = new Set ([1,2,3,4,5, 5, 5])
// items.size // 5



// [...new Set(array)]
// [...new Set('abcdabc')].join('')


// NaN !== NaN  true
let set = new Set()
// 对于Set而言 NaN 是相等的
// let num1 = NaN
// let num2 = NaN
// set.add(num1)
// set.add(num2)
// console.log(set); // Set {NaN}


// 对于Set而言 {}是不相等的
// set.add({})
// console.log(set.size);
// set.add({})
// console.log(set.size);  // 2

// let s = new Set() 
// s.add(1).add(2).add(2)
// console.log(s.size);

// s.has(1)

// const properies = {
//   'width': 1,
//   'height': 1
// }

// if (properies[someName]) {

// }
// const properies = new Set()
// properies.add('width')
// properies.add('height')