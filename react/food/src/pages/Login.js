import React from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setToken } from '../utils/auth'
import { loginApi } from '../services/auth'
import './Login.css'
const NormalLoginForm = (props) => {
  const onFinish = values => {
    // setToken(values.username)
    // 
    loginApi({
      username: values.username,
      password: values.password
    }).then(res =>{
      console.log(res);
      if(res.code === 'success') {
        setToken(res.token)
        props.history.push("/admin")
      }else {
        message.error(res.message)
      }
     })
    .catch(err => message.error('用户不存在'))
  };

  return (
    <Card title="登录界面" className="login-form">
      <Form
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <a href="/">
            忘记密码？
        </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登入
        </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default NormalLoginForm
