import { constants } from '.'

import { fromJS } from 'immutable'

//转化成immutable对象
const defaultState = fromJS({
  mouseIn: false,
  focused: false,
  searchList: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INPUT_BLUR:
      return state.set('focused', false);
    case constants.INPUT_FOCUES:
      return state.set('focused', true);
    case constants.CHANGE_LIST:
      return state.merge({ 'searchList': action.data, 'totalPage': action.totalPage });
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.newPage);
    default:
      return state;
  }
}