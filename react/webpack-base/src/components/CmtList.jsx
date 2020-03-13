import React, { Component } from 'react'
import CmtItem from '@/components/CmtItem'

export default class CmtList extends Component {
  constructor() {
    super()
    this.state = {
      CommendList: [ 
        {id: 1, name: '大黄', commendContent: '就这'},
        {id: 2, name: '小黄', commendContent: '就这'},
        {id: 3, name: '大白', commendContent: '就这'},
        {id: 4, name: '小白', commendContent: '就这'}
      ]
    }
  }
  render() {
    return <div>
      <h1 style={{color: 'red', fontSize: '35px', fontWeight: 200, textAlign: "center"}}>这是评论列表</h1>
      {this.state.CommendList.map(item => 
        <CmtItem key={item.id} {...item}></CmtItem>)
        }
    </div>;
  }
}