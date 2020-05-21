import React, { useState } from 'react'


export default function UseState() {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({ name: "Brant_liang" });
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  //func为函数返回值
  const [func, setFunc] = useState(() => {
    return 1;
  })
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => { setCount(count + 1) }}>+</button>

      <h1>{obj.name} - {obj.age}</h1>
      <button onClick={() => {
        setObj({
          ...obj,
          "age": 18
        })
      }}>change_name</button>

      <h2>{arr}</h2>
      <button onClick={() => {
        setArr(() => {
          setCount(count+1);
          arr.push(count+1);
          return [...arr];
        })
      }}>change_arr</button>
      <h2>{func}</h2>
      <button onClick={() => {
        setFunc(() => { return 2})
      }}>change_arr</button>
    </div>
  )
}
