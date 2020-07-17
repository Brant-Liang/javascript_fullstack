import React, { Component } from 'react'

class Cpn extends Component {
  render() {
    return (
      <div>
        我是组件
      </div>
    )
  }
  componentWillUnmount() {
    console.log('组件CPN卸载阶段');
  }

}


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      isShow: true
    }
    console.log("执行了组件的constructor");
  }

  render() {
    console.log("执行了组件的render");
    return (
      <div>
        我是APP组件
        <h2>当前计数： {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+</button>
        <button onClick={e => this.change()}>切换</button>
        { this.state.isShow ? <Cpn /> : null }
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  change() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  componentDidMount() {
    console.log("执行了组件的componentDidMount方法");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("执行了组件的componentDidUpdate方法");
  }
}
