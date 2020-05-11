import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

export default class TodoList extends Component {

  constructor(props) {
    //调用父类的构造函数
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="insertArea">输入内容</label>
        <div>
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem content={item}
          key={index}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
        inputValue: value
      })
    )
    /* this.setState({
      inputValue: e.target.value
    }) */
  }
  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何改变
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    })
  }
}
