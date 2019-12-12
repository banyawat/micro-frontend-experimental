import React, { Component } from 'react'
import './styles/index.css'

class Main extends Component {
  render = () => (
    <div>
      <div className="featured-container">
        <video width="100%" height="auto" autoPlay>
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <div className="featured-label">
          <h2>มหาศึกชิงบัลลังก์นกนางนวล</h2>
          <p>ปฐมบุรุษผู้พิชิตท้องทะเล บัลลังก์แห่งนี้ นกนางนวลตัวใดจะได้ขึ้นเป็นผู้ครองตัวต่อไป เดล นกหนุ่มสุดหล่อ ที่ตามหาคนรักที่หายไปท้องะเล</p>
          <h3>20+</h3>
        </div>
      </div>
    </div>
  )
}

export default Main
