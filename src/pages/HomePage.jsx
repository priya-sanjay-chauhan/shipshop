import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Category from '../components/Category/Category'
import HomePageProduct from '../components/HomePageProduct/HomePageProduct'
import Track from '../components/Track/Track'
import Testimonial from '../components/Testimonial/Testimonial'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <Category/>
        <HomePageProduct/>
        <Track/>
        <Testimonial/>
    </div>
  )
}

export default HomePage