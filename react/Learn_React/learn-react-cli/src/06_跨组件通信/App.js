import React, { Component } from 'react'

const UserContext = React.createContext({
  nikname: 'Brant',
  level: 38
})
// function ProfileHeader(props) {
//   return (
//     <div>
//       <h2>用户昵称：{props.nikname}</h2>
//       <h2>用户等级：{props.level}</h2>
//     </div>
//   )
// }

// function Profile(props) {
//   return (
//     <div>
//       <ProfileHeader {...props} />
//       <ul>
//         <li>设置1</li>
//         <li>设置2</li>
//         <li>设置3</li>
//         <li>设置4</li>
//       </ul>
//     </div>
//   )
// }

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       nikname: 'BrantL',
//       level: 99
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Profile {...this.state}/>
//       </div>
//     )
//   }
// }
// 函数组件共享数据
function ProfileHeader2 () {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>用户昵称：{value.nikname}</h2>
              <h2>用户等级：{value.level}</h2>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>用户昵称：{this.context.nikname}</h2>
        <h2>用户等级：{this.context.level}</h2>
      </div>
    )
  }
}
ProfileHeader.contextType = UserContext;

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nikname: 'BrantL',
      level: 99
    }
  }
  render() {
    return (
      <div>
        <ProfileHeader2 />
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}
