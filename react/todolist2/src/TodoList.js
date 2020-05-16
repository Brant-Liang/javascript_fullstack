import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import { getInputChangeAction, getAddItemAction, getDeleteAction } from './store/ActionCreator'
import store from './store/index'
export default class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{ marginTop: '10px' }}>
        <Input 
          value={this.state.inputValue} 
          placeholder="Input info" 
          style={{ width: '300px', marginRight: "10px" }} 
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        <List
          size="large"
          style={{marginTop: "10px", width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>}
        />
      </div>
    )
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  deleteItem(index) {
    const action = getDeleteAction(index);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
}
