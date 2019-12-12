import React from 'react'
import THEATER from '../mock/theater'

const Window = ({
  movieID = 2
}) => (
  <iframe 
    width="100%" 
    height="100%" 
    src={THEATER[movieID - 1].url}
    frameBorder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
    rel="0"
  ></iframe>
)

export default Window