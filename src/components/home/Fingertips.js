import React, { useState } from 'react'
import './Fingertips.css'

// images
import tick from '../../assets/images/tick.png'
import c from '../../assets/images/c.png'
import c1 from '../../assets/images/c1.png'

// video
import video from '../../assets/images/video.mp4'

const Fingertips = () => {

  const [pop, setPop] = useState(false);
  console.log("pop", pop)
  
  const popping = () => {
    setPop(!pop)
  }

  const closeIt = (e) => {
    console.log(e)
    e.target.closest(".the-vid") ? console.log("hoorayyyy") : popping()
  }

  return (
    <div className='fingertips-container'>

      <div className='texts'>
        <h1>A whole world of freelance<br /> talent at your fingertips</h1>
        <ul>
            <li>
                <div><img src={tick} alt='image tick'/><h2>The best for every budget</h2></div>
                <p>Find high-quality services at every price point. No<br /> hourly rates, just project-based pricing.</p>
            </li>
            <li>
                <div><img src={tick} alt='image tick'/><h2>Quality work done quickly</h2></div>
                <p>Find the right freelancer to begin working on your<br /> project within minutes.</p>
            </li>
            <li>
                <div><img src={tick} alt='image tick'/><h2>Protected payments, every time</h2></div>
                <p>Always know what you'll pay upfront. Your payment<br /> isn't released until you approve the work.</p>
            </li>
            <li>
                <div><img src={tick} alt='image tick'/><h2>24/7 support</h2></div>
                <p>Questions? Our round-the-clock support team is<br /> available to help anytime, anywhere.</p>
            </li>
        </ul>
      </div>

      <div className='video' onClick={() => popping()}>
        <img src={c} alt='video popup image' className='cover' />
        <img src={c1} alt='video popup image' className='play'/>

        {pop ?
        <div className='popup' onClick={(e) => closeIt(e)}>
          <video width="900" controls className='the-vid'>
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div> : null
        }
      </div>

    </div>
  )
}

export default Fingertips
