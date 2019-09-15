import * as React from 'react';
import PropTypes from 'prop-types';

export class LoginComponent extends React.Component {
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
        <p>Hello <strong>{name}</strong> from your friendly React component.</p>
      </div>
    )
  }
}