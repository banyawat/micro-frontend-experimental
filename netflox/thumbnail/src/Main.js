import React from 'react'
import './styles/index.css'
import THUMB_DATA from './mock/thumb'
import Carousel from './components/Carousel'



const Main = () => {
  const url = 'https://www.google.com/search?q='
  return (
    <div>
      <a href={url}>
        <h2>ยอดฮิต</h2>
      </a>
      <Carousel content={THUMB_DATA.ACTION} />
      <a href={url}>
        <h2>สำหรับ Banyawat</h2>
      </a>
      <Carousel content={THUMB_DATA.FORYOU} />
      <a href={url}>
        <h2>ทีวีดราม่าจาก อเมริกา</h2>
      </a>
      <Carousel content={THUMB_DATA.AMERICA_SERIES} />
    </div>
  )}

export default Main
