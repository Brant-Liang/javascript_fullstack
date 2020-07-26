//1、导入 redux （不能通过ES6）
// common-js一种实现
const redux = require('redux');

const initialState = {
  counter: 0
}
// reducers
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num };
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}
// store (创建的时候需要传入一个reducer)
const store = redux.createStore(reducer)

// actions 
const action1 = { type: 'INCREMENT' }
const action2 = { type: 'DECREMENT' }
const action3 = { type: 'ADD_NUMBER', num: 5 }
const action4 = { type: 'SUB_NUMBER', num: 5 }

//订阅store的修改
store.subscribe(() => {
  console.log("counter:", store.getState().counter);
})

// 派发
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);

