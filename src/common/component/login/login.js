import React from 'react'
import {Button, Checkbox, Form, Icon, notification,Input} from 'antd';
import './login.less'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      if (values.userName === '123' && values.password === '123')
        this.props.history.push('/index')
      else {
        this.openNotification();
      }
    });
  };
  openNotification = () => {
    notification.open({
      message: '用户名和密码',
      description: '都是123',
      duration: 2
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
        <div id={'myLoginn'}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{required: true, message: 'Please input your username!'}],
              })(
                  <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'Please input your Password!'}],
              })(
                  <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                         placeholder="Password"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('number', {
                rules: [{min: 6, message: 'min is 6'}],
              })(
                  <Input maxLength={8} placeholder={'输入字符串'}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                  <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </div>

    );
  }
}

export default Form.create()(NormalLoginForm);

