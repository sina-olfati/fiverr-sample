import React from 'react'

// components
import Navbar from '../components/navbar/Navbar'
import Header from '../components/home/Header'
import Trusted from '../components/home/Trusted'
import Services from '../components/home/Services'

const Home = () => {
  return (
    <div>
      <Header />
      <Trusted />
      <Services />
      
      <Navbar />
    </div>
  )
}

export default Home
