import React, { useEffect, useState } from 'react'
import './Header.css'

// icons
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const [images, setImages] = useState(['one', 'two', 'three', 'four', 'five'])
    const [image, setImage] = useState('one')
   
    
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
