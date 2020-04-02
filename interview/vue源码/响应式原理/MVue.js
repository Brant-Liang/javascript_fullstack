class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm;
    // 1、获取文档碎片对象，放入内存中减少页面的回流和重绘
    const fragment = this.node2Fragment(this.el)
    /* console.log(fragment); */
    // 2、编译模板
    this.compile(fragment)
    //3、 追加艺元素到根元素
    this.el.appendChild(fragment)
    
  }
  compile(fragment) {
    // 获取子节点
    const childNodes = fragment.childNodes;
    childNodes.forEach(child => {
      // console.log(child);
      if(this.isElementNode(child)) {
        // 是元素节点
        //编译元素节点
        this.compileElement(child)
      }else {
        // 文本节点
        // 编译
        this.compileText(child)
      }

      if(child.childNodes && child.childNodes.length) {
        this.compile(child)
      }
    })
  }
  compileElement(node) {

  }
  compileText(node) {

  }
  node2Fragment(el) {
    //创建文档碎片
    const f = document.createDocumentFragment()
    let firstChild
    while(firstChild = el.firstChild) {
      f.appendChild(firstChild)
    }
    return f
  }
  isElementNode(node) {
    return node.nodeType === 1
  }
}

class MVue{
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;
    if(this.$el) {
      // 1、实现一个数据的观察者
      // 2、实现一个指令解析器
      new Compile(this.$el, this)
    }
  }
}