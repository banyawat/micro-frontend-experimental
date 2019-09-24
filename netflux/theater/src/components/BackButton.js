import React from 'react'
import { Icon } from 'antd'

const BackButton = () => (
  <div className="back-to-home-bar">
    <a href="/" className="back-to-home-button">
      <Icon
        type="left" 
      />
      Back to Home
    </a>
  </div>
)

export default BackButton