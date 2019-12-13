import * as React from 'react';
import ReactDOM from 'react-dom'

import LoginComponent from './Login'

class MicroLogin extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<LoginComponent />, this);
    const props = {
      onLogin: args => 
        this.dispatchEvent(new CustomEvent('onLogin', {detail:args}))
    }

    ReactDOM.render(<LoginComponent {...props} />, this);
  }
}
customElements.define('micro-login', MicroLogin);
