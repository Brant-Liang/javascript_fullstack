import React from 'react'
import ReactDOM from 'react-dom'
export default class Life extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opacity: 1
    }
  }
  componentWillMount() {
    console.log('willMount');
  }
  componentDidMount() {
    //启动循环定时器
    console.log('DidMount');
    let { opacity } = this.state
    this.timer =  setInterval(function() {
      console.log('定时器执行');
      opacity -= 0.1
      if(opacity <= 0) {
        opacity = 1
      }
      this.setState({opacity})
    }.bind(this), 200)
  }
  componentWillUnmount() {
    //清理定时器
    clearInterval(this.timer)
  }
  distoryComponent() {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  }
  render() {
    const { opacity } = this.state
    return (
      <div>
        <h2 style={{opacity: opacity}}>{this.props.msg}</h2>
        <button onClick={this.distoryComponent}>不活了</button>
      </div>
    )
  }
}