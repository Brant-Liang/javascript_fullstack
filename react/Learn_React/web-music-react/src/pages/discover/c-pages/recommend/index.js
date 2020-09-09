import React, { memo } from 'react';

import BLTopBanners from './c-cpns/top-banners';
import BLHotRecommend from './c-cpns/hot-recommend';
import BLNewAlbum from './c-cpns/new-album';
import BLRankingList from './c-cpns/ranking-list';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

function BLRecommend(props) {
  return (
    <RecommendWraper>
      <BLTopBanners/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <BLHotRecommend/>
          <BLNewAlbum/>
          <BLRankingList/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  )
}

export default memo(BLRecommend);

// import React, { memo, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { getTopBannersAction } from './store/actionCreators';
// function BLRecommend(props) {
//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   return (
//     <div>
//       <h2>recommend: {topBanners.length}</h2>
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction());
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(BLRecommend));
