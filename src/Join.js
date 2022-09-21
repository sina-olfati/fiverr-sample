import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className='join-container'>
      <div className='join-content'>
        <h1>Join Fiverr</h1>
        <div className='ready-ways'>
            <button><logo>logo</logo><h2>Continue with Facebook</h2></button>
            <button><logo>logo</logo><h2>Continue with Google</h2></button>
            <button><logo>logo</logo><h2>Continue with Apple</h2></button>
        </div>
        <div className='hard-way'>
            <input />
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
