import * as actionTypes from './constants';
import { getTopBanners, getHotRecommend, getNewAlbum, getTopList } from '@/services/recommend'

export const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})
export const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.albums
})
export const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  upList: res.playlist
})
export const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  newList: res.playlist
})
export const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  originList: res.playlist
})
// 获取banners
export const getTopBannersAction = () => {
  return dispach => {
    getTopBanners().then(res => {
      dispach(changeTopBannersAction(res));
    })
  }
}
// 获取热门推荐
export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}
// 获取新碟上架
export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}
export const getRankingListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpListAction(res));
          break;
        case 2:
          dispatch(changeNewListAction(res));
          break;
        case 3:
          dispatch(changeOriginListAction(res));
          break;
        default:
          break;
      }
    })
  }
}