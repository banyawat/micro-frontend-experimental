import React from 'react'
import './styles/index.css'
import Window from './components/Window'
import BackButton from './components/BackButton'

const Main = ({ movieID }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh'
    }}>
      <BackButton />
      <Window movieID={movieID} />
    </div>
  )}

export default Main
