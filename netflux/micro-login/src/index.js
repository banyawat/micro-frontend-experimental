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
        [curr]: args => this.dispatchEvent(new Event(curr, {...args}))
      }), {});
  }
}
customElements.define('micro-login', MicroLogin);