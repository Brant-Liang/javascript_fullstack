//1、导入包
import React from 'react'
import ReactDOM from 'react-dom'
//导入Hello组件
import Hello from '@/components/Hello'
const user = {
  name: 'lc',
  age: '18',
  gender: 'man'
}
ReactDOM.render(<div>
  {/* 直接把组件名称写成标签即可 */}
  <Hello {...user}></Hello>
</div>, document.getElementById('app'))