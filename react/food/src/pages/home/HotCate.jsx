import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import { HotCateWrap } from './Styled-home'
export default class HotCate extends Component {
  render() {
    
  const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    title: 'xixi'
  }));
    return (
      <HotCateWrap> 
        <header>
          热门分类
        </header>
        <Grid data={data1}
        columnNum={3}
        hasLine={false}
        renderItem={dataItem => (
          <div className="item">
            <img src={dataItem.icon}/>
            <span>{dataItem.title}</span>
          </div>
        )}
      />
      </HotCateWrap>
    ) 
  }
}