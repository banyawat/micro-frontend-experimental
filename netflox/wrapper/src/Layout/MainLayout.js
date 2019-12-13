import React from 'react'
import NavBar from '../components/NavBar'

const MainLayout = ({ 
  banner,
  children,
}) => (
  <div className="main-layout">
    <header>
      <NavBar />
    </header>
    {
    banner && <div className="banner">
      {banner}
    </div>
    }
    <div className="container">
      {children}
    </div>
  </div>
)

export default MainLayout
