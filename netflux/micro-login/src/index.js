import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';

import LoginComponent from './Login'

class XSearch extends HTMLElement {
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

    const props = {
      value:this.getAttribute('name'),
      events:this.getEvents(events),
      eventsBooleam:events.onLogin === PropTypes.string,
    }

    render(<LoginComponent name={name} {...props} test={props}/>, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }

  getEvents(events) {
    return Object.keys(events)
      .filter(key => events[key] === PropTypes.func)
      .reduce((prev, curr) => ({
        ...prev,
        [`${curr}Test`]:curr,
        [curr]: args => 
        this.dispatchEvent(new CustomEvent(ev, { ...args }))
      }), {});
  }
}
customElements.define('x-search', XSearch);