import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
// redux-immutable

export default combineReducers({
  header: headerReducer
})