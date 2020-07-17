import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TabControl extends Component {
  static propTypes = {
    titles: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }
  render() {
    const { titles } = this.props
    return (
      <div className="tab-control">
        {
          titles.map((title, index) => {
            return (
              <div key={title}
                className={"tab-item " + (index === this.state.currentIndex ? 'active' : "")}
                onClick={(e) => { this.itemClick(index) }}>
                <span>
                  {title}
                </span>
              </div>
            )
          })
        }
      </div>
    )
  }
  itemClick(idx) {
    this.setState({ currentIndex: idx });
    const { itemsClick } = this.props;
    itemsClick(idx);
  }
}
