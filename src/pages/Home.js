import React from 'react'

// components
import Navbar from '../components/navbar/Navbar'
import Header from '../components/home/Header'
import Trusted from '../components/home/Trusted'
import Services from '../components/home/Services'
import Fingertips from '../components/home/Fingertips'
import Marketplace from '../components/home/Marketplace'

const Home = () => {
  return (
    <div>
      <Header />
      <Trusted />
      <Services />
      <Fingertips />
      <Marketplace />
      
      <Navbar />
    </div>
  )
}

export default Home
