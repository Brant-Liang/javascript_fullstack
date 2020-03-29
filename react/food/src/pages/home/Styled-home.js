import styled from 'styled-components'

export const HeaderWrap=styled.div`
  height: 2.4rem;
  background-color: #F85757;
  font-size: .38rem;
  color: #ffffff;
  text-align: center;
  line-height: 2.4rem;
`

export const SwiperWarp=styled.div`
  font-size: 0;
  padding-bottom: 12px;
  img {
    width: 100%;
  }
`
export const HotCateWrap=styled.div`
  header {
    height: 30px;
    line-height: 30px;
    background-color: #fff;
    padding-left: 2rem;
    border-bottom: 1px solid #ddd; 
  }
  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    img {
      width: 70%;
    }
    span {
      height: 20px;
      margin-top: .05px;
      font-size: 14px;
      color: #000;
    }
  }
`