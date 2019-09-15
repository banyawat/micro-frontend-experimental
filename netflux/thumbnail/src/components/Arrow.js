import React from 'react'

const Arrow = ({ direction }) => (
  <div>
    <span>
      { (direction === 'right') ? '>' : '<' }
    </span>
  </div>
)

export default Arrow
