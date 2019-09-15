import React from 'react';
import ReactDOM from 'react-dom';

class ThumbnailRenderer extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const url = 'https://www.google.com/search?q='
    ReactDOM.render(<a href={url}>test</a>, mountPoint);
  }
}
customElements.define('thumbnail-el', ThumbnailRenderer)