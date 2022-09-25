import React from 'react'
import './Trusted.css'

// images
import facebook from '../../assets/images/facebook.png'
import google2 from '../../assets/images/google2.png'
import netflix from '../../assets/images/netflix.png'
import pandg from '../../assets/images/pandg.png'
import paypal from '../../assets/images/paypal.png'

const Trusted = () => {
  return (
    <div className='trusted-container'>
      <h2>Trusted by:</h2>
      <img src={facebook} alt='logo'/>
      <img src={google2} alt='logo'/>
      <img src={netflix} alt='logo'/>
      <img src={pandg} alt='logo'/>
      <img src={paypal} alt='logo'/>
    </div>
  )
}

export default Trusted
