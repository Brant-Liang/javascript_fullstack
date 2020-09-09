import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNewAlbumAction } from '../../store/actionCreators';
import { Carousel } from 'antd'
import BLThemeHeaderRCM from '@/components/rcm-theme-header';
import HYAlbumCover from "@/components/album-cover";
import { NewAlbumWrapper } from './style';
export default memo(function BLNewAlbum() {
  // redux hooks
  const state = useSelector(state => ({
    newAlbum: state.getIn(['recommend', 'newAlbum'])
  }));
  const dispatch = useDispatch();
  // other hooks
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch]);
  return (
    <NewAlbumWrapper>
      <BLThemeHeaderRCM title="新碟上架"/>
      <div className="content">
        <div className="arrow arrow-left sprite_02" 
            onClick={e => carouselRef.current.prev()}></div>
        <div className="album">
          <Carousel ref={carouselRef} dots={false}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      state.newAlbum.slice(item*5, (item+1)*5).map(item => {
                        return (
                          <HYAlbumCover key={item.id} info={item}/>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02"
             onClick={e => carouselRef.current.next()}></div>
      </div>
    </NewAlbumWrapper>
  )
})
