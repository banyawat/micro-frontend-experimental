import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

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
    render(<LoginComponent/>, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }
}
customElements.define('x-search', XSearch);