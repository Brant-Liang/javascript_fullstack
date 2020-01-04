// vue2.0 如何实现响应式原理
// 数据变化了， 可以更新视图

let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype)

Array.from(['push', 'shift', 'unshift']).forEach(method => {
  proto[method] = function () { //函数劫持，将函数进行重写， 内部调用的还是老方法
    updateView() //切片编程
    oldArrayPrototype[method].call(this, ...arguments)
  }
})
function observer(target) { // 观察者
  if (typeof target !== 'object' || target == null) {
    return target
  }

  if (Array.isArray(target)) { // 拦截数组 给数组中的方法进行重写
    // target.__proto__ = proto
    Object.setPrototypeOf(target, proto)
  }
  for (let key in target) {
    // Object.defineProperty(target, key, {
    //   get () {},
    //   set () {}
    // }) 
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  observer(value)
  Object.defineProperty(target, key, {
    get () {
      return value
    },
    set (newVal) {
      if (newVal !== value) {
        updateView()
        value = newVal
      }
    }
  })
}

function updateView() {
  console.log('更新视图')
}

// 使用 Object.defineProperty 重新定义对象属性，给属性增加 getter，setter方法
let data = {
  name: 'wn', 
  age: 18, 
  weight: [100, 110, 120]
}
observer(data)

// setInterval(() => {
// data.name = String(Math.random())+'zm'
// }, 3000)
data.weight.push(130)

