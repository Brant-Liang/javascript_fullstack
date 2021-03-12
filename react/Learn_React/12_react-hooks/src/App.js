import React, { createContext } from 'react'
// import CounterClass from './01_体验hooks/01_counter-class'
// import CounterHook from './01_体验hooks/02_counter-hook';
// import CounterHook from './01_体验hooks/03_counter-hook';
// import MultiHookState from './02_useState的使用/01_多个状态';

// import ClassChangeTitle from './03_useEffect的使用/01_class改变标题';
// import HookChangeTitle from './03_useEffect的使用/02_hook改变标题'
// import EffectHookCancel from './03_useEffect的使用/03_useEffect模拟订阅和取消';
// import MultEffectDemo from './03_useEffect的使用/04_多个useEffect一起使用'

// import ContextHookDemo from './04_useContext的使用/01_useContext的使用';

// import Home from './05_useReducer的使用/home';

// import CallbackDemo from './06_useCallback的使用/01_useCallback不能进行的性能优化'
import CallbackDemo from './06_useCallback的使用/02_useCallback的性能优化'

// import MemoHookDemo1 from './07_useMemo的使用/01_useMemo复杂'
// import MemoHookDemo2 from './07_useMemo的使用/02_useMemo传入子组件引用类型'

// import RefHookDemo1 from './08_useRef的使用/01_useRef获取DOM'
// import RefHookDemo1 from './08_useRef的使用/02_useRef引用其他数据';

// import EffectCounterDemo from './10_useLayoutEffect/01_useEffect修改count'
// import EffectCounterDemo from './10_useLayoutEffect/02_useLayoutEffect'

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
      {/* <UserContext.Provider value={{name: "Brant", age: 18}}>
        <ThemeContext.Provider value={{fontSize: "18px"}}>
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider> */}
      {/* <Home /> */}

      {/* useCallback */}
      <CallbackDemo />

      {/* 7 useMemo */}
      {/* <MemoHookDemo1/> */}
      {/* <MemoHookDemo2 /> */}

      {/* 8 useRef */}
      {/* <RefHookDemo1 /> */}

      {/* 10 useLayoutEffect */}
      {/* <EffectCounterDemo /> */}
    </div>
  )
}

