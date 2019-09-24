import React from 'react';
import ReactDOM from 'react-dom'
import Main from './Main'

class TheaterRenderer extends HTMLElement {
  connectedCallback() {
    const movieID = this.getAttribute('movieID')
    ReactDOM.render(<Main movieID={movieID} />, this);
  }
}
customElements.define('theater-el', TheaterRenderer)
