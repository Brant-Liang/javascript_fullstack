import React, { useState, useCallback } from 'react'

export default function CallbackDemo01() {
  const [count, setCount] = useState(0)
  const increment1 = () => {
    console.log('执行increment1');
    setCount(count + 1);
  }
  const increment2 = useCallback(
    () => {
      console.log('执行increment2');
      setCount(count + 1);
    },
    [count],
  )
  return (
    <div>
      <h2>CallbackDemo01</h2>
      <h2>当前计数： {count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  )
}
