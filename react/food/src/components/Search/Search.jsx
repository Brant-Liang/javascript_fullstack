import React, { Component } from 'react'
import search from 'assets/img/common/search.png'
import { BorderSearchWrap } from './Styled-Search'
export default class Header extends Component {
  render() {
    return (
      <BorderSearchWrap>
        <div>
          <img src={search}/>
          <span>想吃什么？如"川菜"</span>
        </div>
      </BorderSearchWrap>
    ) 
  }
}
