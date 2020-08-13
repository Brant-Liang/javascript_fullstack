import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render() {
    const id = this.props.match.params.id
    return (
      <div>
        <h2>Detail: {id}</h2>
      </div>
    )
  }
}
