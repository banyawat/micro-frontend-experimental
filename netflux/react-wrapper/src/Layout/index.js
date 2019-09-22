import React from 'react'
import NavBar from '../components/NavBar'

const Layout = ({ children }) => (
  <div className="main-layout">
    <NavBar />
    {children}
  </div>
)

export default Layout