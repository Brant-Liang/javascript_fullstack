import React, { useState, useMemo, memo } from 'react'

const Counter = memo(function Counter(props) {
  console.log('Count render');
  return (
    <h1 onClick={props.onClick}>{props.count}</h1>
  );
})

export default function UseMeno() {
  const [count, setCount] = useState(0);
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count === 3]);
  const onClick = useMemo(() => {
    return () => {
      console.log('click');
    }
  }, [])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>double: {doubleCount}</h2>
      <Counter count={doubleCount} onClick={onClick}></Counter>
    </div>
  )
}
