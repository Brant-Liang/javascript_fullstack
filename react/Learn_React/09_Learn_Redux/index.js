import store from './store/index.js'
import { addAction, subAction, incrementAction, decrementAction } from './store/actionCreators.js'

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(addAction(10))
store.dispatch(subAction(30))
store.dispatch(incrementAction())
store.dispatch(decrementAction())

