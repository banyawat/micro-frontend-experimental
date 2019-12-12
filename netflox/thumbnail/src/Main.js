import React from 'react'
import './styles/index.css'
import THUMB_DATA from './mock/thumb'
import Carousel from './components/Carousel'



const Main = () => {
  return (
    <div>
      <a>
        <h2>ยอดฮิต</h2>
      </a>
      <Carousel content={THUMB_DATA.ACTION} />
      <a>
        <h2>สำหรับ Banyawat</h2>
      </a>
      <Carousel content={THUMB_DATA.FORYOU} />
      <a>
        <h2>ทีวีดราม่าจาก อเมริกา</h2>
      </a>
      <Carousel content={THUMB_DATA.AMERICA_SERIES} />
    </div>
  )}

export default Main
