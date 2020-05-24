import React, { useState, useEffect } from 'react'

// 提高代码复用 优化了关注点分离

// useEffect第二个参数 []数组 只有数组中每一项都不变的情况下， useEffect才不被执行
export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }
  //componentDidMount UnMount
  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    return () => {
      window.removeEventListener('resize', onResize, false);
    }
  }, [])

  // componentDidMount 
  useEffect(() => {
    document.title = count
  }, [count])

  useEffect(() => {
    console.log('count:' + count);
  })

  const onClick = () => {
    console.log('click');
  }
  useEffect(() => {
    document.querySelector('#size').addEventListener('click', onClick, false);
    return () => {
      document.querySelector('#size').removeEventListener('click', onClick, false);
    }
  },)
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button id="size">Click</button>
      {
        count%2 ? <span>size: {size.width} x {size.height}</span> :<p>size: {size.width} x {size.height}</p>
        
      }
    </div>
  )
}
