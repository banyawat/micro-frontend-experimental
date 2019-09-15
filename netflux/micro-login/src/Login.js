import * as React from 'react';
import PropTypes from 'prop-types';

import { version, Button } from 'antd';
import 'antd/dist/antd.css';
import './style/index.css'

class LoginComponent extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: "Chris"
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        heloooooooo
        <div>Current antd version: {version}</div>
        <div style={{ marginTop: "16px" }}>
          <Button type="primary">Example button</Button>
        </div>
        <p className='logo'>Hello <strong>{name}</strong> from your friendly React component.</p>
      </div>
    )
  }
}

export default LoginComponent