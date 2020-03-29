import React, { Component } from 'react'
import { Form, Card, Button, Input, message } from 'antd'
class Edit extends Component {
  render() {
    const onFinish = values => {
      console.log(values);
      // Form.scrollToField(values);
    };
    const onFinishFailed = ({ errorFields }) => {
      message.error("请输入名字")
      // Form.scrollToField(errorFields[0].name);
    };
    return (
      <Card title="商品编辑">
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item label="名字" name="name" rules={[{
                required: true,
                message:  '请输入商品名字' 
              }]}>
            <Input placeholder="请输入商品名字"/>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">保存</Button>
          </Form.Item>
        </Form>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item label="价格" name="price" rules={[{
                required: true,
                message:  '请输入商品价格' 
              }]}>
            <Input placeholder="请输入商品价格"/>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">保存</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}
export default Edit