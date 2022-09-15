import React from 'react'
import './Header.css'

// icons
import LanguageIcon from '@mui/icons-material/Language';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <a href='#'><h2>fiverr<span>.</span></h2></a>
            <ul>
                <li><a href='#'>Fiverr Business</a></li>
                <li><a href='#'>Explore</a></li>
                <li><a href='#'><div><LanguageIcon /><p> English</p></div></a></li>
                <li><a href='#'><div><CurrencyPoundIcon /> <p>GBP</p></div></a></li>
                <li><a href='#'>Become a Seller</a></li>
                <li><a href='#'>Sign in</a></li>
                <li className='join'><a href='#'>Join</a></li>
            </ul>
        </nav>

        <section>
            <h1>Find the perfect <i>freelance</i><br />services for your business</h1>
            <div>
                <div>/search icon/</div>
                <input />
                <button>Search</button>
            </div>
            <div>
                <h3>Popular:</h3>
                <div>
                    <ul>
                        <a href='#'><li>Website Design</li></a>
                        <a href='#'><li>WordPress</li></a>
                        <a href='#'><li>Logo Design</li></a>
                        <a href='#'><li>Video Editing</li></a>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header
