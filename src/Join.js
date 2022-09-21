import React from 'react'
import './Join.css'

// images
import facebook from './assets/images/facebook.svg'
import google from './assets/images/google.png'
import apple from './assets/images/apple.svg'

const Join = () => {
  return (
    <div className='join-container'>
      <div className='join-content'>
        <h1>Join Fiverr</h1>
        <div className='ready-ways'>
            <button><img src={facebook} /><h2>Continue with Facebook</h2></button>
            <button><img src={google} /><h2>Continue with Google</h2></button>
            <button><img src={apple} /><h2>Continue with Apple</h2></button>
            <div className='or'>OR</div>
        </div>
        <div className='hard-way'>
            <input placeholder='Enter your email'/>
            <button>Continue</button>
            <p>By joining I agree to receive emails from Fiverr.</p>
        </div>
        <div className='signIn'>
            <h3>Already a member? <a>Sign In</a></h3>
        </div>
      </div>
    </div>
  )
}

export default Join
