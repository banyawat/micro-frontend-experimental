import React from 'react';
import ReactDOM from 'react-dom'
import Main from './Main'

class ThumbnailRenderer extends HTMLElement {
  connectedCallback() {
    // const mountPoint = document.createElement('span');
    // this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    ReactDOM.render(<Main />, this);
  }
}
customElements.define('thumbnail-el', ThumbnailRenderer)