import React, { useEffect, useState } from 'react'

export default function EffectHookCancel() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log("订阅一些事件")

    return () => {
      console.log("取消一些订阅");
    }
  }, [])
  return (
    <div>
      <h2>useEffect</h2>
      <h2>当前计数： {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}
