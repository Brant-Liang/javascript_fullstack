function divide(numerator, denominator) {
  return new Promise((resolve, reject) => {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
      reject(new Error('Must be number!'));
    }
    console.log('After validating type...');
    if (denominator === 0) {
      reject(new Error("Cannot divide by 0!"));
    }
    console.log('After validating non-zero denominator...');
    resolve(numerator / denominator);
  });
}

divide(3, 0)
.then(res => console.log("1:"+res))
.catch(err => { console.log('2:'+err)})
  .then(r => console.log(r));


function test() {
  var i = 0;
  new Promise((resolve, reject) => {
    resolve(++i);
  }).then(re => {++i;
    console.log(i);
  });
  console.log(i); //1
}
test();

// After validating type...
// After validating non-zero denominator...
// 1
// 2
// 2:Error: Cannot divide by 0!
// undefined