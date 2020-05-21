import { fromJS } from 'immutable'
import { constants } from '.'
//转化成immutable对象
const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);
    case constants.CHANGE_LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
}