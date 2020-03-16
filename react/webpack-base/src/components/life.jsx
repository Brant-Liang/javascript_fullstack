import React from 'react'

export default class Life extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opacity: 1
    }
  }
  render() {
    const { opacity } = this.setState
    return (
      <div>
        <h2 style={{opacity: opacity}}>{this.props.msg}</h2>
        <button>不活了</button>
      </div>
    )
  }
}