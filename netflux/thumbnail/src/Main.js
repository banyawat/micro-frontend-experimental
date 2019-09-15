import React from 'react'
import Carousel from './components/Carousel'
import THUMB_DATA from './mock/thumb'

const Main = () => {
  const url = 'https://www.google.com/search?q='
  return (
    <div>
      <style>

      </style>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <a href={url}>
        <h2>ยอดฮิต</h2>
      </a>
      <Carousel content={THUMB_DATA} />
    </div>
  )}

export default Main
