import React, { PureComponent } from 'react'
import { WriterWrapper, RecommendWritter, WritterSwitch, WritterHeader, WritterList, WritterListItem } from '../style'

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WritterHeader>
          <RecommendWritter>推荐作者</RecommendWritter>
          <WritterSwitch>
            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
            换一批
          </WritterSwitch>
        </WritterHeader>
        <WritterList>
          <WritterListItem>
            <img src="https://upload.jianshu.io/users/upload_avatars/2587459/9f4cfc0f-88b8-420c-b36e-9741e1191644.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
            <span className="follow">关注</span>
            <span className="name">穿着prada挤地铁</span> 
            <p>写了342.6k字 · 5.6k喜欢</p>
          </WritterListItem>
          <WritterListItem>
            <img src="https://upload.jianshu.io/users/upload_avatars/2587459/9f4cfc0f-88b8-420c-b36e-9741e1191644.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
            <span className="follow">关注</span>
            <span className="name">穿着prada挤地铁</span> 
            <p>写了342.6k字 · 5.6k喜欢</p>
          </WritterListItem>
          <WritterListItem>
            <img src="https://upload.jianshu.io/users/upload_avatars/2587459/9f4cfc0f-88b8-420c-b36e-9741e1191644.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
            <span className="follow">关注</span>
            <span className="name">穿着prada挤地铁</span> 
            <p>写了342.6k字 · 5.6k喜欢 </p>
          </WritterListItem>
        </WritterList>
      </WriterWrapper>
    )
  }
}
export default Writer;
