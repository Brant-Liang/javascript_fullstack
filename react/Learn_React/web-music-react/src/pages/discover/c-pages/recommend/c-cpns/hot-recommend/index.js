import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { HOT_RECOMMEND_LIMIT } from '@/common/constants';

import BLThemeHeaderRCM from '@/components/rcm-theme-header';
import BLSongsCover from '@/components/songs-cover'
import {
  HotRecommendWrapper
} from './style'
import { getHotRecommendAction } from '../../store/actionCreators';

export default memo(function BLHotRecommend() {

  //redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch();
  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <BLThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <BLSongsCover key={item.id} info={item} />
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})