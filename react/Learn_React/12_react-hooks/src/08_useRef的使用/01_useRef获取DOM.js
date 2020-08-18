import React, { PureComponent, useRef } from 'react'

class TestCpn extends PureComponent {
  render () {
    return <h2>TestCpn</h2>
  }
}

function TestCpn2(props) {
  return <h2>TestCpn2</h2>
}
export default function RefHookDemo1() {
  const titleRef = useRef();
  const inputRef = useRef();
  const cpnRef = useRef();
  const cpn2Ref = useRef();
  function changeDom() {
    titleRef.current.innerHTML = 'hello useRef';
    inputRef.current.focus();
    console.log(cpnRef.current);
    console.log(cpn2Ref.current);
  }
  return (
    <div>
      <h2 ref={titleRef}>useRef的使用</h2>
      <input ref={inputRef} type="text" />
      <TestCpn ref={cpnRef} />
      <TestCpn2 ref={cpn2Ref} />
      <button onClick={e => {changeDom()}}>修改DOM</button>
    </div>
  )
}
