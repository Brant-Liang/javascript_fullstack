import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import DongHua from './donghua'
import './style.css'

export default class TodoList extends Component {
  constructor(props) {
    //调用父类的构造函数
    super(props);
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    //bind操作只会执行一次
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  // 在组件即将被挂载到页面
  /* componentWillMount() {
    console.log('componentWillMount');
  } */
  
  render() {
    // console.log('render');
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
        <DongHua/>
      </Fragment>
    )
  }
  // 在组件被挂载到页面
  componentDidMount() {
    console.log('componentDidMount');

    // axios.get('/api/todolist').then(() => {alert('success')})
    //       .catch(() => {alert('error')})
  }

  // 组件被更新之前，他会自动执行
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    //返回值为false让组件不更新
    return true
  } */
  //组件被更新之前，他会自动执行，但在shouldComponentUdate之后
  //如果shouldComponentUpdate返回值为false则不执行
  /* componentWillUpdate() {
    console.log('componentWillUpdate');
  } */
  
  //组件更新完成之后，自动执行
  /* componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  } */
  
  
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

  handleInputChange() {
    const value = this.input.value;
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
    }), () =>{
      console.log(this.ul.querySelectorAll('li').length);
    })
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
