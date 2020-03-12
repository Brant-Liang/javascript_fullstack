//1、导入包
import React from 'react'
import ReactDOM from 'react-dom'
const a = 10
const str = '你好 帅'
const bool = false
const h1 = <h1>this is a h1</h1>
const arr = [
  <h2>这是h2</h2>,
  <h3>这是h3</h3>
]
const arrStr = ['Ariel', 'Brant', 'Cathy', 'Dasiy']
//定义空数组
const nameArr = []
//方案一
arrStr.forEach((item, index) => {
  nameArr.push(<h2 key={index}>{item}</h2>)
})
// {} 中写js表达式 或变量
ReactDOM.render(<div>
  {a + 1}
  <br/>
  {str}
  <br/>
  {bool ? '1' : '2'}
  <br/>
  {h1}
  <br/>
  {/* {arr} */}
  <br/>
  {nameArr}
  <hr/>
  {arrStr.map((item, index) => <h2 key={index}>{item}</h2>)}
  <p className="myP">!!!!</p>
  <label htmlFor="foo"></label>
</div>, document.getElementById('app'))