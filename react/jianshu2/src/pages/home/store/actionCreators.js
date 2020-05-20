import axios from 'axios'
import { constants } from '.'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommend: result.recommend
})

const addHomeList = (list, nextPage) => ({
  type: constants.LOAD_MORE_DATA,
  list: fromJS(list),
  nextPage
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      if (res.data.code === 200) {
        const result = res.data.data;
        dispatch(changeHomeData(result));
      }
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      if (res.data.code === 200) {
        const result = res.data.data;
        console.log(result);
        dispatch(addHomeList(result, page+1));
      }
    })
  }
}