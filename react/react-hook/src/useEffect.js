import React, { useState, useEffect } from 'react'

export default function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    return () => {
      console.log(('componentWillUnmount'));
    }
  }, [count])

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
