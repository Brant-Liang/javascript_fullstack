//假设main.js还是入口文件
console.log('ojbk');
//webpack-dev-server打包好的main.js是托管到了内存中
//在根目录中有一个看不见的main.js
//
//1、导入时，成员名必须这么写
import React from 'react' //创建组件、虚拟dom、生命周期
import ReactDOM from 'react-dom' //把创建好的 组件和虚拟dom放到页面上展示

//2、创建虚拟dom树
//参数1：创建元素的类型，字符串，表示元素的名称
//参数2：是一个对象或null，表示当前这个DOM元素的属性
//参数3：子节点（包括其他虚拟dom获取 文本子节点）
//参数n：其他子节点
/* <h1 id="myh1" title="this is a h1">这是一个H1</h1> */
const myH1 = React.createElement('h1', {
  id: 'myh1',
  title: 'this is a h1'
}, '这是一个H1')
const myDiv = React.createElement('div', null, 'div元素',myH1)

//渲染页面上的 dom 结构，最好就是写html代码

// const mytest = <div>aaa</div>

//3、使用ReactDOM渲染到页面上
//参数1：要渲染的那个虚拟DOM
//参数2：指定页面上容器，渲染到该容器上
ReactDOM.render(myDiv, document.querySelector('#app'))