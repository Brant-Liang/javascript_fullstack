import React, { useState } from 'react';

export default function MultiHookState() {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(18);
  const [friends, setFriends] = useState(["brant", 'liang'])
  return (
    <div>
      <h2>当前计数： {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <h2>我的年龄: {age}</h2>
      <h2>好友列表</h2>
      <ul>
        {
          friends.map((friend, index) => {
            return <li key={index}>{friend}</li>
          })
        }
      </ul>
      <button onClick={e => setFriends([...friends, "tom"])}>添加好友</button>
    </div>
  )
}
