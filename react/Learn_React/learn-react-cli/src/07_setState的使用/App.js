import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0, 
      count2: 1
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count2}</h2>
        <button onClick={e => this.increment()} >+1</button>
      </div>
    )
  }
  increment() {
    // this.setState({}) 合并 并使用最后一个setState
    // this.setState({
    //   count: this.state.count+2,
    //   count2: this.state.count2+1
    // })
    // this.setState({
    //   count: this.state.count+1
    // })
    // this.setState({
    //   count: this.state.count+5
    // })
    this.setState((prevState, props) => {
      return {
        count: prevState.count+1
      }
    })
    this.setState((prevState, props) => {
      return {
        count: prevState.count+2
      }
    })
    this.setState((prevState, props) => {
      return {
        count: prevState.count+3
      }
    })
  }
}
