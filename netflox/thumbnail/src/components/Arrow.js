import React from 'react'
import { Icon } from 'antd'

const Arrow = ({
  className,
  direction,
  onClick = () => {}
}) => (
  <button 
    onClick={onClick}
    className={`carousel-arrow ${className}`}
  >
    <span>
      { (direction === 'right') ? <Icon type="right" /> : <Icon type="left" /> }
    </span>
  </button>
)

export default Arrow
