import React, { useState, useMemo, memo } from 'react'

const HYInfo = memo((props) => {
  console.log('HYInfo重新渲染');
  return <h2>名字： {props.info.name} 年龄：{props.info.age}</h2>
})

export default function MemoHookDemo2() {
  console.log('MemoHookDemo2重新渲染');
  // const [info] = useState({name: 'why', age: 18});
  const [show, setShow] = useState(true);
  const info = useMemo(() => {
    return { name: 'why', age: 18 }
  }, [])
  return (
    <div>
      <HYInfo info={info} />
      <button onClick={e => setShow(!show)}>show切换</button>

    </div>
  )
}
