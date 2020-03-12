import React from 'react'
//第一种创建组件方式
function Hello(props) {
  //在组件中renturn一个null 什么都不渲染

  //在组件中返回一个合法的jsx 虚拟dom
  props.name
  console.log(props);
  return <div>这是hello组件--{props.name}--{props.age}--{props.gender}</div>
}
//暴露该组件
export default Hello