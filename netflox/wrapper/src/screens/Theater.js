import React from 'react'

const Theater = ({ match }) => (
  <div>
    <theater-el movieID={match.params.id}></theater-el>
  </div>
)

export default Theater