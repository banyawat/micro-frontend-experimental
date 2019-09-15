import React from 'react'
import 'antd/dist/antd.min.css'
import THUMB_DATA from './mock/thumb'
import Carousel from './components/Carousel'
import { Button } from 'antd'


const Main = () => {
  const url = 'https://www.google.com/search?q='
  return (
    <div>
      <a href={url}>
        <h2>ยอดฮิต</h2>
      </a>
      <Carousel content={THUMB_DATA} />
    </div>
  )}

export default Main
