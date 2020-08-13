import React, { PureComponent } from 'react'

export default class Detail3 extends PureComponent {
  render() {
    console.log(this.props.location);
    const location = this.props.location;
    return (
      <div>
        <h2>Detail3: {location.state.name}</h2>
      </div>
    )
  }
}
