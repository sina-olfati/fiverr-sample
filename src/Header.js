import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
        <nav>
            <img src='#' />
            <ul>
                <li><a>Fiverr Business</a></li>
                <li><a>Explore</a></li>
                <li><a><div><icon>/icon/</icon> <p>English</p></div></a></li>
                <li><a><div><icon>/icon/</icon> <p>GBP</p></div></a></li>
                <li><a><div><icon>/icon/</icon> <p>GBP</p></div></a></li>
                <li><a>Become a Seller</a></li>
                <li><a>Sign in</a></li>
                <li><a>Join</a></li>
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
                        <a><li>Website Design</li></a>
                        <a><li>WordPress</li></a>
                        <a><li>Logo Design</li></a>
                        <a><li>Video Editing</li></a>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header
