import React from 'react'

// components
import Navbar from '../components/navbar/Navbar'
import Header from '../components/home/Header'
import Trusted from '../components/home/Trusted'
import Services from '../components/home/Services'
import Fingertips from '../components/home/Fingertips'

const Home = () => {
  return (
    <div>
      <Header />
      <Trusted />
      <Services />
      <Fingertips />
      
      <Navbar />
    </div>
  )
}

export default Home
