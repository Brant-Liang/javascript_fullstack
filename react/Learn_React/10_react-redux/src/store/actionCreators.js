import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS, 
  CHANGE_RECOMMENDS,
  FETCH_HOME_MULTIDATA } from './constants.js'
import axios from 'axios';

export const addAction = num => ({
  type: ADD_NUMBER,
  num
});

export const subAction = num => ({
  type: SUB_NUMBER,
  num
});

export const incrementAction = () => ({
  type: INCREMENT
});

export const decrementAction = () => ({
  type: DECREMENT
});

// 轮播图 actions
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners
});
// 推荐 actions
export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends
});

// redux-thunk中定义的action函数
export const getHomeMultdataAction = dispatch => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data;
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendsAction(data.recommend.list));
  })
}

// redux-saga拦截的action
export const fetchHomeMultDataAction = {
  type: FETCH_HOME_MULTIDATA

}