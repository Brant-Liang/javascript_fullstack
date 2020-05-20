import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  display: flex;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
`;

export const HomeRight = styled.div`
  width: 280px;
  margin-left: 35px;
  float: right;
`;


export const ListItem = styled.div`
  padding: 20px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-top: 10px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0; 
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;
export const WriterWrapper = styled.div`
  width: 278px;
  border-radius: 3px;
  height: 300px;      
  text-align: center;
`;

export const WritterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  color: #969696
`;

export const RecommendWritter = styled.span`
  
`;

export const WritterSwitch = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .3s ease-in;
    font-size: 14px;
  }
`;

export const WritterList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
`;

export const WritterListItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
  img {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .follow {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e
  }
  .name {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
  }
  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
    margin: 0 0 10px;
  }
`;