import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteAction } from './store/ActionCreator'
import store from './store/index'
import TodoListUI from './TodoListUI'

export default class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange} 
            handleBtnClick={this.handleBtnClick}
            deleteItem={this.deleteItem}
           />
  }
  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
    // axios.get('http://localhost:3000/list').then((res) =>{
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // })
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
