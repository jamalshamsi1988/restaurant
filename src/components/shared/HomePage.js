import React from 'react'
import Header from '../layout/Header'

const HomePage = ({children}) => {
  return (
    <div>
    <Header />
    {children}
    <Footer />
    </div>
  )
}

export default HomePage
