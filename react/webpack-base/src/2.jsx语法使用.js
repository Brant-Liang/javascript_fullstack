//2、创建虚拟dom
//const mydiv = React.createElement('div', {id: 'mydiv'}, '这是一个div')
// 在js中默认不能写html 否则打包失败
//可以用babel来转换这些js中的标签
//这种在js中写入类似于HTML的语法 叫JSX语法 符合XML规范的js
//jsx本质上还是在打包时将html代码转换成React.createElement()
const mydiv = <div id="mydiv" title="this is a div">这是一个div</div>
//3、调用render函数