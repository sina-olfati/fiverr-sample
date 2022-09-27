import React, { useState } from 'react'
import './Services.css'

// images
import a1 from '../../assets/images/a1.png'
import a2 from '../../assets/images/a2.png'
import a3 from '../../assets/images/a3.png'
import a4 from '../../assets/images/a4.png'
import a5 from '../../assets/images/a5.png'
import a6 from '../../assets/images/a6.png'
import a7 from '../../assets/images/a7.png'
import a8 from '../../assets/images/a8.png'
import a9 from '../../assets/images/a9.png'
import a10 from '../../assets/images/a10.png'
import arrow from '../../assets/images/arrow.png'

const Services = () => {

    const [slider, setSlider] = useState(1)


  return (
    <div className='services'>
    <div className='services-container'>
      <h1>Popular professional services</h1>
      <div className={`slider ${slider === 1 ? 'first' : 'second'}`}>

        <div className='one'>
            <div className='item'>
                <div className='shadow'></div>
                    <img src={a1} alt='image'/>
                <div className='texts'>
                    <p>Build your brand</p>
                    <h2>Logo Design</h2>
                </div>
            </div>
            <div className='item'>
                <div className='shadow'></div>
                <img src={a2} alt='image'/>
                <div className='texts'>
                    <p>Customize your site</p>
                    <h2>WordPress</h2>
                </div>
            </div>
            <div className='item'>
                <div className='shadow'></div>
                <img src={a3} alt='image'/>
                <div className='texts'>
                    <p>Share your message</p>
                    <h2>Voice Over</h2>
                </div>
            </div>
            <div className='item'>
                <div className='shadow'></div>
                <img src={a4} alt='image'/>
                <div className='texts'>
                    <p>Engage your audience</p>
                    <h2>Video Explainer</h2>
                </div>
            </div>
            <div className='item'>
                <div className='shadow'></div>
                <img src={a5} alt='image'/>
                <div className='texts'>
                    <p>Reach more customers</p>
                    <h2>Social Media</h2>
                </div>
            </div>
        </div>

        <div className='two'>
        <div className='item'>
            <div className='shadow'></div>
                    <img src={a6} alt='image'/>
                <div className='texts'>
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            <div className='item'>
                <div className='shadow'></div>
                <img src={a7} alt='image'/>
                <div className='texts'>
                    <p>Color your dreams</p>
                    <h2>Illustration</h2>
                </div>
            </div>
            <div className='item'>
                <div className='shadow'></div>
                <img src={a8} alt='image'/>
                <div className='texts'>
                    <p>Go global</p>
                    <h2>Translation</h2>
                </div>
            </div>
            <div className='item'>
                <div className='shadow'></div>
                <img src={a9} alt='image'/>
                <div className='texts'>
                    <p>Learn your business</p>
                    <h2>Data Entry</h2>
                </div>
            </div>
            <div className='item'>
                <div className='shadow'></div>
                <img src={a10}alt='image' />
                <div className='texts'>
                    <p>Showcase your story</p>
                    <h2>Book Covers</h2>
                </div>
            </div>
        </div>

      </div>
    </div>
    <button className='right-button' onClick={() => slider < 2 ? setSlider(slider + 1) : null}><img src={arrow} alt='image' /></button>
    <button className='left-button' onClick={() => slider > 1 ? setSlider(slider - 1) : null}><img src={arrow} alt='image' /></button>
    </div>
  )
}

export default Services
