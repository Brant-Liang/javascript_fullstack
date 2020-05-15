import React, { Component } from 'react'

export default class Test extends Component {
  //父组件的render运行一次，子组件的render也会被运行一次
  render() {
    console.log('Test Render');
    return (
      <div>
        {this.props.content}
      </div>
    )
  }
}
