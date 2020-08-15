import React, { useState, createContext } from 'react'
// import CounterClass from './01_体验hooks/01_counter-class'
// import CounterHook from './01_体验hooks/02_counter-hook';
// import CounterHook from './01_体验hooks/03_counter-hook';
// import MultiHookState from './02_useState的使用/01_多个状态';

// import ClassChangeTitle from './03_useEffect的使用/01_class改变标题';
// import HookChangeTitle from './03_useEffect的使用/02_hook改变标题'
// import EffectHookCancel from './03_useEffect的使用/03_useEffect模拟订阅和取消';
// import MultEffectDemo from './03_useEffect的使用/04_多个useEffect一起使用'

import ContextHookDemo from './04_useContext的使用/01_useContext的使用';

export const UserContext = createContext()
export const ThemeContext = createContext()

export default function App() {
  // const [show, setShow] = useState(true)
  return (
    <div>
      {/* 1、hook初体验 */}
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}

      {/* useState */}
      {/* <MultiHookState /> */}

      {/* useEffect */}
      {/* <ClassChangeTitle /> */}
      {/* <HookChangeTitle /> */}

      {/* {show ? <EffectHookCancel /> : ''}
      <button onClick={e => setShow(!show)}>切换</button> */}
      {/* <MultEffectDemo /> */}

      {/* useContext */}
      <UserContext.Provider value={{name: "Brant", age: 18}}>
        <ThemeContext.Provider value={{fontSize: "18px"}}>
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

