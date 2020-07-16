import React from 'react'

//类组件
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         hello
//       </div>
//     )
//   }
// }
// 函数式组件 ： 
/**
 * 没有this
 * 没有内部状态（hooks）
 * 没有生命周期
 */
export default function App() {
  return (
    <div>我是function的组件: App组件</div>
  )
}