import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Brant", "gq", "homer"]
    }
  }
  render() {
    return (
      <div>
        <TransitionGroup>
          {this.state.names.map((item, index) => {
            return (
              <CSSTransition key={index}
                            timeout={500}
                            classNames="item">
                <div>{item}</div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button onClick={e => this.addName()}>+name</button>
      </div>
    )
  }
  addName() {
    this.setState({
      names: [...this.state.names, "brant"]
    })
  }
}
