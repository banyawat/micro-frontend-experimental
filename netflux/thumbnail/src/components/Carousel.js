import React, { Component } from 'react'
import { Carousel } from 'antd'
import Arrow from './Arrow'
import { WRAPPER_URL } from '../config'

class CustomCarousel extends Component {
  constructor(props) {
    super(props)
    
    this.carousel = React.createRef()
  }

  render() {
    const { content } = this.props
    return(
      <div className="carousel">
        <Arrow
          direction="left"
          className="left"
          onClick={() => {this.carousel.prev()}}
        />
        <Carousel 
          dots={false}
          infinite
          slidesToShow={5}
          className="carousel-item"
          ref={node => (this.carousel = node)}
        >
          {
            content.map((item, key) => (
              <a key={key} href={`${WRAPPER_URL}/theater/${item.id}`}>
                <img src={item.imgUrl} alt=""></img>
              </a>
            ))
          }
        </Carousel>
        <Arrow 
          direction="right" 
          className="right"
          onClick={() => {this.carousel.next()}}
        />
      </div>
    )
  }
}

export default CustomCarousel