import React from 'react'
import MainLayout from '../Layout/MainLayout'

const Main = () => (
  <MainLayout
    banner={
      <featured-el></featured-el>
    }
  >
    <thumbnail-el></thumbnail-el>
  </MainLayout>
)

export default Main