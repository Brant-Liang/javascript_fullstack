import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.titleEl = null;
  }
  render() {
    return (
      <div>
        {/* 字符串 */}
        <h2 ref="titleRef">Hello world</h2>
        {/* 目前React推荐的方式 */}
        <h2 ref={ this.titleRef }>Hello world</h2>
        {/* 函数 */}
        <h2 ref={arg => this.titleEl = arg }>Hello world</h2>

        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }
  changeText() {
    // 使用方式一: 字符串（不推荐， 后续更新会删除）
    this.refs.titleRef.innerHTML = "Hello Ref";
    // 使用方式二
    this.titleRef.current.innerHTML = "Hello Ref";
    //使用方式三
    this.titleEl.innerHTML = "Hello Ref";
  }
}
