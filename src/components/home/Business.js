import React from 'react'
import './Business.css'

// images
import tick from '../../assets/images/tick.png'
import d1 from '../../assets/images/d1.png'

const Business = () => {
  return (
    <div className='business-container'>
      <div className='texts'>
        <div className='fiverr'><h2>fiverr </h2> <h3> business.</h3><div className='new'>NEW</div></div>
        <h1>A business solution<br /> designed for <i>teams</i></h1>
        <h4>Upgrade to a curated experience packed with tools<br /> and benefits, dedicated to businesses</h4>
        <div className='tick-p'><img src={tick} /><p>Connect to freelancers with proven business experience</p></div>
        <div className='tick-p'><img src={tick}  /><p>Get matched with the perfect talent by a customer success<br /> manager</p></div>
        <div className='tick-p'><img src={tick}  /><p>Manage teamwork and boost productivity with one powerful<br /> workspace</p></div>
        <button>Explore Fiverr Business</button>
      </div>

      <div className='image'>
        <img src={d1} />
      </div>
    </div>
  )
}

export default Business
