import React from 'react'

export default class BindEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '哈哈',
      name: '张三'
    }
  }
  render() {
    return <div>我是bind组件
        {/* <button onClick={function() {
          console.log('111');
        }}>按钮</button> */}
        {/* <button onClick= {this.show}>按钮</button> */}
        
        {/* 点击按钮修改msg */}
        <input type="text" style={{width: '500px'}} value={this.state.msg} 
            onChange={() => this.changeMsg()} ref="input"/>
        <button onClick = {() => this.show('狗')}>按钮</button>
        <h2>{this.state.msg}</h2>
      </div>
  }
  //实例方法
  show = (arg1) => {
    // console.log('show方法调用了'+ arg1);
    //错误做法
    // this.state.msg = '1111'
    //应该使用React中的this.setState

    //this.setState只会把对应是state进行更新
    this.setState({
      msg: 156 + arg1
    }, function() {
      console.log(this.state.msg);
    })
    //this.setState是异步操作
    //console.log(this.state.msg);

    //如果要在调用完this.setState之后 要立即获取this.state中的值，可以用this.setState({},callback)
  }
  changeMsg = () => {
    console.log(this.refs.input);
    this.setState({
      msg: this.refs.input.value
    })
  }
}