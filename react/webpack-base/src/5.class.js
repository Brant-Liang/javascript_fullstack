console.log('ok');
//通过构造函数，直接访问到的属性叫【静态属性】
function Person(name, age) {
  this.name = name
  this.age = age
  //实例方法
  Person.prototype.say = function() {
    console.log('这是实例方法');
  }
  //静态方法
  Person.show = function() {
    console.log('这是静态方法');
  }
}
var p1 = new Person('lc', 19)
console.log(p1);
p1.say()
Person.show()
//创建动物类
class Animal {
  //每个类中都有构造器
  //作用 每当new这个类 就会立即执行构造器中的代码
  constructor(name, age) {
    //实例属性
    this.name = name
    this.age = age
  }
  //通过static修饰的属性：静态属性
  static info = 'aaa'
  //实例方法
  roal() {
    console.log('动物的实例方法');
  }
  //静态方法
  static show() {
    console.log('这是Animal的静态方法');
  }
}
const a1 = new Animal('小白', 3)
console.log(a1);
console.log(Animal.info)
a1.roal()
Animal.show()
