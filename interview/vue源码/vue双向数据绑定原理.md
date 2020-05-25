
双向数据绑定原理

===
vue.js是采用数据劫持结合发布订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter、getter,在数据变动是发布消息给订阅者，触发相应的回调。

具体步骤：
 第一步：需要对Observe的数据进行递归遍历，包括子属性对象的属性，都加上setter和getter,这样就可以监听到数据变化
 第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据变化的订阅者，一旦有数据变化，收到通知，更新视图
 第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是：
  1、在自身实例化时往属性订阅器(dep)中添加自己
  2、自身必须有一个update()方法
  3、待属性变动dep.notice()通知时，能调用自身的update(),并触发Compile的监听回调函数，更新视图

第四步： MVVM作为视图绑定的入口，整合Observer、Compile、watcher,Observer监听自己的数据变化，利用Compile来编译模板指令，利用watcher来搭建起Observer和Compile的桥梁，实现数据变化影响视图更新，视图交互化引起数据变更的双向绑定效果。