import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

class XSearch extends HTMLElement {
  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
  }

  mount() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    render(<a href={url}>{name}</a>, mountPoint);
  }

  unmount() {
    unmountComponentAtNode(this);
  }
}
customElements.define('x-search', XSearch);