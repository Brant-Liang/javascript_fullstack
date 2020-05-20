import axios from 'axios'
import { constants } from '.'
import { fromJS } from 'immutable'

const getDetailInfo = (title, content) => ({
  type: constants.GET_DETAIL_INFO,
  title: fromJS(title),
  content: fromJS(content)
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      if (res.data.code === 200) {
        const result = res.data.data;
        dispatch(getDetailInfo(result.title, result.content));
      }
    }).catch(() => {
      console.log('error');
    })
  }
}