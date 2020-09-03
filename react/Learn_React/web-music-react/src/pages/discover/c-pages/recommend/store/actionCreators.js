import * as actionTypes from './constants';
import { getTopBanners } from '@/services/recommend'

export const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannersAction = () => {
  return dispach => {
    getTopBanners().then(res => {
      dispach(changeTopBannersAction(res));
    })
  }
}