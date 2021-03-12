// a.js
const name = 'brantliang';
const age = 18;

function sayHello (name) {
  console.log('hello ' + name);
}

module.exports = {
  name: 'abc',
  age: 123,
  sayHello: (name) => {
    console.log('hello', name)
  }
}

exports.name = name;
exports.age = age;
exports.sayHello = sayHello;
