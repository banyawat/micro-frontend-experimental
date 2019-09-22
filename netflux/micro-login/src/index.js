import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';

import LoginComponent from './Login'

class MicroLogin extends HTMLElement {
  
  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {
    const name = this.getAttribute('name');
    const events = LoginComponent.propTypes ? LoginComponent.propTypes : {};

    render(<LoginComponent name={name} {...this.getEvents(events)}/>, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }

  getEvents(events) {
    return Object.keys(events)
      .filter(key => events[key] === PropTypes.func)
      .reduce((prev, curr) => ({
        ...prev,
        [curr]: args => {
          console.log('args 000000')
          console.log(args)
          return this.dispatchEvent(new CustomEvent(curr, {detail:{...args}}))
        }
      }), {});
  }
}
customElements.define('micro-login', MicroLogin);