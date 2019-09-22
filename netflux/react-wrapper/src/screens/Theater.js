import React from 'react'

const Theater = ({ match }) => (
  <div>
    <h1>You are watching movies ID = {match.params.id}</h1>
  </div>
)

export default Theater