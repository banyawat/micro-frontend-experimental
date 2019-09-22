import React from 'react';
import ReactDOM from 'react-dom'
import Main from './Main'

class TheaterRenderer extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<Main />, this);
  }
}
customElements.define('theater-el', TheaterRenderer)