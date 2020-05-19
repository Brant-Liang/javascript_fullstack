import { constants } from '.';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constants.INPUT_FOCUES
})

export const searchBlur = () => ({
  type: constants.INPUT_BLUR
})

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('./api/headerList.json').then((res) => {
      if (res.data.success) {
        const data = res.data.data;
        dispatch(changeList(data));
      }
    }).catch(() => {
      console.log("error");
    })
  }
}

export const changePage = (newPage) => ({
  type: constants.CHANGE_PAGE,
  newPage
})