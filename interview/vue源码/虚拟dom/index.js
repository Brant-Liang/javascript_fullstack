// 1、先实现虚拟dom，主要是一个对象 来描述dom节点
import {h} from './vdom'


h('div', {id: 'wrapper', a: 1}, h('span', {style: {color: 'red'}}, 'hello'), 'lc')



// {
//   type: 'div',
//   props: { id: 'wrapper', a: 1 },
//   children:[
//     {}, {}
//   ]
// }