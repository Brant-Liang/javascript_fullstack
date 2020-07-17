import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChildCpn extends Component {
  render() {
    const { name, age, height, btnClick } = this.props;
    return (
      <div>
        <h2>子组件展示数据： {name + " " + age + " " + height }</h2>
        <button onClick={btnClick}>+1</button>
        {/* <h2>子组件计数： {this.state}</h2> */}
      </div>
    )
  }
}

ChildCpn.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.string
}

function FuncChildCpn (props) {
  const { name, age, height } = props;
  return (
    <h2>子组件展示数据： {name + " " + age + " " + height }</h2>
  )
}
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数： {this.state.counter}</h2>
        <button onClick={ e => {this.increment()}}>+</button>
        <ChildCpn name="Brant" age={18} height="18cm" btnClick={this.increment}/>
        <ChildCpn name="kobe" age={40} height="198cm" />
        <FuncChildCpn name="kobe" age={40} height="198cm" />
      </div>
    )
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
