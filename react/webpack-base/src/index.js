//1、导入包
import React from 'react'
import ReactDOM from 'react-dom'
import Life from './components/Life'
//定义父组件

ReactDOM.render(<div>
  <Life msg="react太难了，学不会"></Life>
</div>, document.getElementById('app'))