import React, { useEffect, useState } from 'react'
import './Header.css'

// components
import Join from './Join';

// icons
import LanguageIcon from '@mui/icons-material/Language';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const [images, setImages] = useState(['one', 'two', 'three', 'four', 'five'])
    const [image, setImage] = useState('one')
    const [join, setJoin] = useState(false)

    const setJoiner = () => {
        setJoin(!join)
    }
    
    useEffect(() => {
        
        var a = 1
        const interval = setInterval(() => {
            const theImage = images[a]
            setImage(theImage)
            a < 4 ? a++ : a = 0 
            console.log(a)
        }, 6000)

    }, [])

  return (
    <div className={`header ${image}`}>
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

        <section>
            <div className='section-container'>
                <h1>Find the perfect <i>freelance</i><br />services for your business</h1>
                <div className='search'>
                    <div><SearchIcon /></div>
                    <input placeholder="Try ''building mobile app''" />
                    <button>Search</button>
                </div>
                <div className='trends'>
                    <h3>Popular:</h3>
                    <ul>
                        <li><a href='#'>Website Design</a></li>
                        <li><a href='#'>WordPress</a></li>
                        <li><a href='#'>Logo Design</a></li>
                        <li><a href='#'>Video Editing</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header
