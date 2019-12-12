import React, { Component } from 'react'
import './styles/index.css'

class Main extends Component {
  render = () => (
    <div>
      <div id="player"></div>
      <video width="100%" height="640" autoPlay>
        <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Main
