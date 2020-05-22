import React, { useRef } from 'react'

export default function UseRef() {
  const inputEl = useRef(null);
  const save = useRef({ value: 123 })
  return (
    <div>
      <input ref={inputEl} />
      <button onClick={() => {
        console.log(inputEl.current.value);
        save.current.value = inputEl.current.value
        console.log(save);
      }}>获取ref</button>
    </div>
  )
}
