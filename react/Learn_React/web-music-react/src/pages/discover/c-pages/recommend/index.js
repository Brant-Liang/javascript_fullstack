import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannersAction } from './store/actionCreators';
function BLRecommend(props) {
  // 组件redux关联： 获取数据和进行操作
  const recommend = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual)
  const dispatch = useDispatch();
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])
  return (
    <div>
      <h2>recommend: {recommend.topBanners.length}</h2>
    </div>
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
