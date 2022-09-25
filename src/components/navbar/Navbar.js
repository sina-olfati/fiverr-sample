import React, {useState} from 'react'
import './Navbar.css'

// components
import Join from './Join';

// icons
import LanguageIcon from '@mui/icons-material/Language';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';



const Navbar = () => {

    const [join, setJoin] = useState(false)

    const setJoiner = () => {
        setJoin(!join)
    }


  return (
    <div className='navbar-container'>
      {join ? <Join setJoiner={setJoiner}/> : null}
        <nav>
            <a href='#'><h2>fiverr<span>.</span></h2></a>
            <ul>
                <li><a href='#'>Fiverr Business</a></li>
                <li><a href='#'>Explore</a></li>
                <li><a href='#'><div><LanguageIcon /><p> English</p></div></a></li>
                <li><a href='#'><div><CurrencyPoundIcon /> <p>GBP</p></div></a></li>
                <li><a href='#'>Become a Seller</a></li>
                <li><a href='#'>Sign in</a></li>
                <li className='join' onClick={() => setJoiner()}><a href='#'>Join</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
