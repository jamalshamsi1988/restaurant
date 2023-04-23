import React from 'react'
import Header from '../layout/Header'
import CarouselHeader from '../carousels/CarouselHeader'
import Category from '../Category'
import MenuHeader from '../MenuHeader'
import AllMenu from '../AllMenu'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
    <Header />
        
        <CarouselHeader />
        <Category/>
        <MenuHeader />
      <AllMenu />
    <Footer />
    </>
  )
}

export default HomePage
