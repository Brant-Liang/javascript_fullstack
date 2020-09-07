import * as actionTypes from './constants';
import { getTopBanners, getHotRecommend } from '@/services/recommend'

export const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})
export const getTopBannersAction = () => {
  return dispach => {
    getTopBanners().then(res => {
      dispach(changeTopBannersAction(res));
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}