import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: 'lilei', age: 20 },
        { name: 'lily', age: 25 },
        { name: 'lucy', age: 22}
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return <li key={item.name}>{item.name} 年龄：{item.age}
                       <button onClick={e => this.incrementAge(index)}>age+1</button>
                     </li>
            })
          }
        </ul>
        <button onClick={e => this.insertDate()}>添加数据</button>
      </div>
    )
  }

  insertDate() {
    // 开发中不建议这样做
    // const newDate = {name: 'Tom', age: 30};
    // this.state.friends.push(newDate);
    // this.setState({
    //   friends: this.state.friends
    // })
    //推荐做法
    const newFriend = [...this.state.friends, { name: 'Tom', age: 30 }];
    this.setState({
      friends: newFriend
    })
  }

  incrementAge(index) {
    const newFriend = [...this.state.friends];
    newFriend[index].age += 1;
    this.setState({
      friends: newFriend
    })
  }
}
