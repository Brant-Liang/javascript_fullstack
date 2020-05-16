import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class DongHua extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames="fade"
                  appear={true}
                  unmountOnExit
                  onEntered={(el) => {el.style.color="red"}}
                  key={index}
                  >
                  <div>
                    {item}
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    )
  }
  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default DongHua