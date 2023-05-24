'use client'
import React from 'react'
import ImageSlider from './components/Carousel'
import Headline from './components/Headline/Headline'
import SportsBar from './components/SportsBar'

const Home = () => {
  return (
    <div className='max-w-5xl mx-auto'>
        <ImageSlider />
        <Headline />
        <SportsBar />
    </div>
  )
}

export default Home