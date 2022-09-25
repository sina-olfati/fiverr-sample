import React from 'react'

// components
import Navbar from '../components/navbar/Navbar'
import Header from '../components/home/Header'
import Trusted from '../components/home/Trusted'

const Home = () => {
  return (
    <div>
      <Header />
      <Trusted />
      
      <Navbar />
    </div>
  )
}

export default Home
