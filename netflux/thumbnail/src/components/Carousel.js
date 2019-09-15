import React from 'react'
import Slider from 'react-slick'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 4,
  className: 'carousel-item'
}

const Carousel = ({ content }) => (
  <Slider {...settings}>
    {
      content.map(item => (
        <div>
          <img src={item.url} alt=""></img>
        </div>
      ))
    }
  </Slider>
)

export default Carousel