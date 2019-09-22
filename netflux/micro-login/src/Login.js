import * as React from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import './style/index.css'

import { 
  message,
  Form, 
  Icon, 
  Input, 
  Button,
  Checkbox
} from 'antd';

class NormalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    const tokenDetail = localStorage.getItem('tokenDetail')
    console.log('Recieved tokenDetail :',tokenDetail)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const {
          username,
          password,
        } = values
        if(username && username==='admin' && password && password==='1234'){
          this.props.onLogin({loginStatus:'success',token:'1234567890',user:'admin'})
          message.success('Login success!')
        }else{
          this.props.onLogin({loginStatus:'failure'})
          message.error('Login failure!')
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id='components-form-demo-normal-login' className='centered'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              />,
              )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              />,
              )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


WrappedNormalLoginForm.propTypes = {
  name: PropTypes.string,
  onLogin: PropTypes.func,
}

WrappedNormalLoginForm.defaultProps = {
  name: "Chris",
  onLogin: () => {}
}

export default WrappedNormalLoginForm