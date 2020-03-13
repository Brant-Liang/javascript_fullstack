//1、导入包
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './6.class-extends'
class Hello extends Component {
  constructor() {
    //由于Hello组件继承了父类Component, 所以在构造器中必须有super()
    super()
    //只有调用super以后，才能用this
    this.state = {  //相当于vue中data
      msg: '我是组件hello的组件'
    } 
  }
  //渲染当前组件对应的虚拟dom
  render() {
    //不论是class或function创建的组件 props是只读的
    // this.props.name = "小灰"
    //在class创建的组件中this.state中的数据是可读可写的
    this.state.msg = 'msg的值被修改了'
    //在class创建组件中，要使用props传参是时，不需要接受 直接通过this.props.***访问即可
    return <div>这是hello组件--{this.props.name}--{this.props.age}
              <h2>{this.state.msg}</h2>
           </div>
  }
}
const user = {
  name: '大黄',
  age: 4,
  gender: 'female'
}
ReactDOM.render(<div>
  {/* 直接把组件名称写成标签即可 */}
  <Hello {...user}></Hello>
</div>, document.getElementById('app'))