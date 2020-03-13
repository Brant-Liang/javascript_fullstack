import React from 'react'
// 一次封装
// const itemStyle = {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'}
// const userStyle = {fontSize: '14px'}
// const cmtStyle = {fontSize: '12px'}
//二次封装
// styles = {
//   itemStyle: {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'},
//   userStyle: {fontSize: '14px'},
//   cmtStyle: {fontSize: '12px'}
// }
import styles from '@/components/styles'
//子组件
export default function CmtItem(props) {
  return <div style={styles.itemStyle}>
    <h1 style={styles.userStyle}>用户名: {props.name}</h1>
    <h3 style={styles.cmtStyle}>评论： {props.commendContent}</h3>
  </div>
}
