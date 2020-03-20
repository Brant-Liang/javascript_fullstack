//new myVue{data:{}}

class myVue {
  constructor(options) {
    this.$options = options

    //数据响应化
    this.$data = options.data
    console.log(options.data);
    this.observe(this.$data)
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

    Object.defineProperty(obj, key, {
      get() {
        return val
      },
      set(newVal) {
        if(newVal !== val) {
          val = newVal
          console.log(`${key}属性更新了：${val}`);
        }
      }
    })
  }
}