import React from 'react'
import { Carousel } from 'antd'
import Arrow from './Arrow'

const CustomCarousel = ({ content }) => (
  <div>
    <Arrow
      direction="left"
    />
    <Carousel 
      dots={false}
      infinite
      slidesToShow={5}
      className="carousel-item"
    >
      {
        content.map(item => (
          <div>
            <img src={item.url} alt=""></img>
          </div>
        ))
      }
    </Carousel>
    <Arrow 
      direction="right" 
    />
  </div>
)

export default CustomCarousel