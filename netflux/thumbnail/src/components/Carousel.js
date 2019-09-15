import React, { Component } from 'react'
import { Carousel } from 'antd'
import Arrow from './Arrow'

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
              <div key={key}>
                <img src={item.url} alt=""></img>
              </div>
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