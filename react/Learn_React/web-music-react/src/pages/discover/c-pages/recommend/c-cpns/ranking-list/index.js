import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRankingListAction } from '../../store/actionCreators'

import BLThemeHeaderRCM from '@/components/rcm-theme-header';
import BLTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';
export default memo(function BLRankingList() {

  const { upList, newList, originList } = useSelector(state => ({
    upList: state.getIn(["recommend", "upList"]),
    newList: state.getIn(["recommend", "newList"]),
    originList: state.getIn(["recommend", "originList"])
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankingListAction(0));
    dispatch(getRankingListAction(2));
    dispatch(getRankingListAction(3));
  }, [dispatch])
  return (
    <RankingWrapper>
      <BLThemeHeaderRCM title="榜单"/>
      <div className="tops">
        <BLTopRanking info={upList} />
        <BLTopRanking info={newList} />
        <BLTopRanking info={originList} />
      </div>
    </RankingWrapper>
  )
})
