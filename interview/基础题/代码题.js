var a = {n: 1};
var b = a;
a.x = a = {n: 2};
// .的优先级比 = 号高
//1. a = { n: 1 , x: undefined} === b
//2. a = {n: 2}  b = { n: 1 , x: undefined}
//3. b = { n: 1, x = {n: 2} }

// b = { n: 1 , x: { n: 2}}
console.log(a.x) 	// undefined
console.log(b.x)  // { n: 2}