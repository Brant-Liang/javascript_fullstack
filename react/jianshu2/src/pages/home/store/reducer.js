import { fromJS } from 'immutable'
import { constants } from '.'
//转化成immutable对象
const defaultState = fromJS({
  articleList: [],
  recommend: [],
  articlePage: 1,
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        articleList: fromJS(action.articleList),
        recommend: fromJS(action.recommend)
      });
    case constants.LOAD_MORE_DATA:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      });
    case constants.SHOW_SCROLL_TOP:
      return state.set("showScroll", true);
    case constants.HIDE_SCROLL_TOP:
      return state.set("showScroll", false);
    default:
      return state;
  }
}