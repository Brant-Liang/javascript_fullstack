## js 数据类型
6基本 
null  undefined boolean string number Symbol
1复杂
object

## 检测类型
Object.prototype.toString.call()
typeof()  不能检测null 复杂类型中只能检测function

## 原型链
```js
继承
//原型链继承
Child.prototype = new Parent()
//原型四继承
Child.prototype = Object.create(Parent.prototype)
//寄生组合
function Child() {
  Parent.call(this)
}
```

## 闭包 是指有权访问另一个函数作用域中的变量
```js
  function foo() {
    var a = 0 
    return () => {
      return a 
    }
  }
```