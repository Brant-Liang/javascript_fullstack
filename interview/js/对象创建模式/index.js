/* 
  一、Object构造函数模式
    先创建Object对象，再动态添加属性和方法
    适用场景，起始时不确定对象内部数据
    问题：语句太多
*/

var person = new Object()

person.name = 'Tom'
person.age = 12

/* 
  二、对象字面量模式
  适用场景：起始对象内部数据确定
  问题： 拖过创建多个对象，有重复代码
*/
var person2 = {
  name: 'Tom',
  age: 12,
  setName = function (name) {
    this.name = name
  }
}

/* 
  三、工厂模式
  通过工厂函数动态创建对象并返回
  适用场景：需要创建多个对象
  问题：对象中没有一个具体的类型，都是Object
*/

function createdPerson(name, age) {
  var obj = {
    name: name,
    age: age,
    setName: function (name) {
      this.name = name
    }
  }
  return obj
}

/* 
  四、自定义构造函数
  自定义构造函数，通过new创建对象
  适用场景：需要创建多个类型确定的对象
  问题：每个对象都有相同的数据，浪费内存
*/
function Person1(name, age) {
  this.name = name
  this.age = age
  this.setName = function (name) {
    this.name = name
  }
}

/* 
  五、构造函数+原型组合模式
  自定义构造函数，属性在函数中初始化，方法添加到原型上
  适用场景：需要创建多个类型的确定对象
*/
function Person2(name, age) {
  this.name = name
  this.age = age
}
Person2.prototype.setName = function (name) {
  this.name = name
}
