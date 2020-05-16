import React, { Component, Fragment } from 'react'

export default class TodolistUI extends Component {
  render() {
    return (
      <Fragment>
        <label htmlFor="insertArea" className="hide">输入内容</label>
        <div>
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => {
          this.ul = ul
        }}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}
