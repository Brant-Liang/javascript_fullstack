import React, { Component } from 'react'
import Header from './Header'
import Swiper from './Swiper'
import Search from '@/Search/Search'
import HotCate from './HotCate'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Swiper/>
        <Search/>
        <HotCate/>
      </div>
    ) 
  }
}
