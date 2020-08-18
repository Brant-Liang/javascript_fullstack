import React, { useRef } from 'react'

export default function RefHookDemo2() {
  const numRef = useRef(10);
  return (
    <div>
      <h2>RefHookDemo2: {numRef.current}</h2>
    </div>
  )
}
