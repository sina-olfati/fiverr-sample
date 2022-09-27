import React from 'react'
import './Marketplace.css'

// images
import b1 from '../../assets/images/b1.svg'
import b2 from '../../assets/images/b2.svg'
import b3 from '../../assets/images/b3.svg'
import b4 from '../../assets/images/b4.svg'
import b5 from '../../assets/images/b5.svg'
import b6 from '../../assets/images/b6.svg'
import b7 from '../../assets/images/b7.svg'
import b8 from '../../assets/images/b8.svg'
import b9 from '../../assets/images/b9.svg'

const Marketplace = () => {
  return (
    <div className='marketplace-conteiner'>
      <h1>Explore the marketplace</h1>
      <div className='options'>
        <ul>
            <li>
                <div>
                    <img src={b1} />
                    <h4>Graphics & Design</h4>
                </div>
            </li>
            <li>
                <div>
                    <img src={b2} />
                    <h4>Digital Marketing</h4>
                </div>
            </li>
            <li>
                <div>
                    <img src={b3} />
                    <h4>Writing & Translation</h4>
                </div>
            </li>
            <li>
                <div>
                    <img src={b4} />
                    <h4>Video & Animation</h4>
                </div>
            </li>
            <li>
                <div>
                    <img src={b5} />
                    <h4>Music & Audio</h4>
                </div>
            </li>
            <li>
                <div>
                    <img src={b6} />
                    <h4>Programming & Tech</h4>
                </div>
            </li>
            <li>
                <div>
                    <img src={b7} />
                    <h4>Business</h4>
                </div>
            </li>
            <li>
                <div>
                    <img src={b8} />
                    <h4>Lifestyle</h4>
                </div>
            </li>
            <li>
                <div>
                    <img src={b9} />
                    <h4>Data</h4>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Marketplace
