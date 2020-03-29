import React, { Component } from 'react'
import { SwiperWarp } from './Styled-home'
import { Carousel } from 'antd-mobile'
import swiper1 from 'assets/img/banner/banner-1.jpg'
import swiper2 from 'assets/img/banner/banner-2.jpg'
import swiper3 from 'assets/img/banner/banner-3.png'

export default class Swiper extends Component {
  render() {
    return (
      <SwiperWarp>
        <Carousel
          autoplay={true}
          infinite
        >
          <img src={swiper1} />
          <img src={swiper2} />
          <img src={swiper3} />
        </Carousel>
      </SwiperWarp>
    ) 
  }
}
