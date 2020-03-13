//父类 [理解成原型对象prototype]
class Human {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHello() {
    console.log('Hello');
  }
}

class American extends Human {
  constructor(name, age) {
    //1、如果一个子类 通过extends关键字继承父类 那么在子类的constructor的构造函数中，必须优先调用super()
    //2、super其实是父类的构造器，子类中的super()其实是父类constructor的一个引用
    super(name, age)
  }
}
const a1 = new American('jack', 18)
console.log(a1);
a1.sayHello()


class Chinese extends Human{
  constructor(name, age, IDnumber) {
    super(name, age)
    //this只能放到super之后
    this.IDnumber = IDnumber
  }
}
const c1 = new Chinese('张三', 22, '2036215412138')
console.log(c1);
c1.sayHello()