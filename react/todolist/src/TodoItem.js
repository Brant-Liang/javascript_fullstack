import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // 一个组件要从父组件接受参数
  // 只要父组件的render函数被重新执行，则会执行
  /* componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  } */

  // 当组件将要被移除是
  /* componentWillUnmount() {
    console.log('child componentWillUnmount');
  } */
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log('child render');
    const { content, test } = this.props 
    return (
      <li onClick={this.handleClick} >
        {test} - {content}
      </li>
    )
  }
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'Hello World'
}