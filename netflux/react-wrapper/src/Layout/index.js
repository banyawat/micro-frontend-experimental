import React from 'react'
import NavBar from '../components/NavBar'

const Layout = ({ children }) => (
  <div className="main-layout">
    <header>
      <NavBar />
    </header>
    <div className="container">
      {children}
    </div>
  </div>
)

export default Layout