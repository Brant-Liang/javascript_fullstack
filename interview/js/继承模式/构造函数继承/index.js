function Person(name, age) {
  this.name = name
  this.age = age 
}
function Stuedent(name, age) {
  Person.call(this);
}

const s1 = new Stuedent('brantliang', 18);

console.log(s1);