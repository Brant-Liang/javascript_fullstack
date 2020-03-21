//new myVue{data:{}}

class myVue {
  constructor(options) {
    this.$options = options

    //数据响应化
    this.$data = options.data
    console.log(options.data);
    this.observe(this.$data)

    //模拟watcher创建
    new Watcher()
    this.$data.test;
  }

  observe(value) {
    if(!value || typeof value !== 'object') return
    //遍历该对象
    Object.keys(value).forEach(key => {
      this.defineReactive(value, key, value[key])
    })
  }
  //数据响应化
  defineReactive(obj, key, val){

    this.observe(val) //递归解决数据嵌套
    
    const dep = new Dep()
    Object.defineProperty(obj, key, {
      get() {
        this.Dep.target && dep.addDep(Dep.target)
        return val
      },
      set(newVal) {
        if(newVal !== val) {
          val = newVal
          // console.log(`${key}属性更新了：${val}`);
          dep.notify();
        }
      }
    })
  }
}

//发布订阅者模式
//Dep用来管理Watcher
class Dep {
  constructor() {
    //存放若干依赖（watcher）
    this.deps = []
  }
  addDep(dep) {
    this.deps.push(dep)
  }
  //发通知
  notify() {
    this.deps.forEach(dep => dep.update())
  }
}

//Watcher

class Watcher {
  constructor() {
    //将当前watcher实例指定到Dep静态属性target
    Dep.target = this
  }
  update() {
    console.log('属性更新了');
  }
}