import React, { Component } from 'react'
import { Card, Table,Button, Popconfirm } from 'antd'

const dataSource = [
  {
    id: '1',
    name: '香皂',
    price: 5
  },
  {
    id: '2',
    name: '肥皂',
    price: 4
  },
  {
    id: '1',
    name: '早',
    price: 1
  }
];

const columns = [
  {
    title: '序号',
    width: 80,
    align: 'center',
    render: (txt, record, index) => index + 1
  },
  {
    title: '名字',
    dataIndex: 'name'
  },
  {
    title: '价格',
    dataIndex: 'price',
  },
  {
    title: '操作',
    render: (txt, record, index) => {
      return (<div>
        <Button type="primary" size="small">修改</Button>
        <Popconfirm title="是否确定删除此项？" 
        onCancel={()=>{}} 
        onConfirm={()=>{
          //掉接口
        }}>
          <Button style={{margin:"0 20px"}} type="danger" size="small">删除</Button>
        </Popconfirm>
      </div>)
    }
  },
];
export default class List extends Component {
  render() {
    return (
      <Card title="商品列表" extra={<Button type="primary" onClick={
        () =>  this.props.history.push('/admin/products/edit')
      }>
      新增</Button>}>
        <Table columns={columns} bordered dataSource={dataSource}></Table>
      </Card>
    )
  }
}
