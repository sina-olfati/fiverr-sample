import React, { useState } from 'react'
import './Services.css'

const Services = () => {

    const [slider, setSlider] = useState(1)


  return (
    <div className='services'>
    <div className='services-container'>
      <h1>Popular professional services</h1>
      <div className={`slider ${slider == 1 ? 'first' : 'second'}`}>

        <div className='one'>
            <div className='item'>
                <img src='' />
                <div className='texts'>
                    <p>Build your brand</p>
                    <h2>Logo Design</h2>
                </div>
            </div>
            <div className='item'>
                <div className='texts'>
                    <p>Customize your site</p>
                    <h2>WordPress</h2>
                </div>
            </div>
            <div className='item'>
                <div className='texts'>
                    <p>Share your message</p>
                    <h2>Voice Over</h2>
                </div>
            </div>
            <div className='item'>
                <div className='texts'>
                    <p>Engage your audience</p>
                    <h2>Video Explainer</h2>
                </div>
            </div>
            <div className='item'>
                <div className='texts'>
                    <p>Reach more customers</p>
                    <h2>Social Media</h2>
                </div>
            </div>
        </div>

        <div className='two'>
        <div className='item'>
                <img src='' />
                <div className='texts'>
                    <p>Build your brand2</p>
                    <h2>Logo Design2</h2>
                </div>
            </div>
            <div className='item'>
                <div className='texts'>
                    <p>Customize your site2</p>
                    <h2>WordPress2</h2>
                </div>
            </div>
            <div className='item'>
                <div className='texts'>
                    <p>Share your message</p>
                    <h2>Voice Over</h2>
                </div>
            </div>
            <div className='item'>
                <div className='texts'>
                    <p>Engage your audience</p>
                    <h2>Video Explainer</h2>
                </div>
            </div>
            <div className='item'>
                <div className='texts'>
                    <p>Reach more customers</p>
                    <h2>Social Media</h2>
                </div>
            </div>
        </div>

      </div>
    </div>
    <button className='right-button' onClick={() => slider < 2 ? setSlider(slider + 1) : null}> + </button>
    <button className='left-button' onClick={() => slider > 1 ? setSlider(slider - 1) : null}> - </button>
    </div>
  )
}

export default Services
