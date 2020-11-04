import React, { useEffect } from 'react'
import { MenuItem } from '@material-ui/core'

import './Header.css'
import { aboutRef } from '../Home'
import { animateLogo } from '../../utils/utils'


function scrollToContent(content) {
    content.current.scrollIntoView({ behavior: 'smooth', block: 'center'})
}

const Header = () => {
    useEffect(() => {
       animateLogo()
    })

    return (
        <nav className='header'> 
            <main className='container'>
                <div className='header__logo'>
                    <h2>
                        <span className='logo__G'>G</span>
                        <span className='logo__ene'>ene</span>
                        <p className='logo__T'>T</p>
                        <span className='logo__ech'>ech</span>
                    </h2>
                </div>

                <div className='header__options'>
                    <MenuItem onClick={() => scrollToContent(aboutRef)}>
                        <p className='header__option'>About</p>
                    </MenuItem>
                </div>
            </main>
        </nav>
    )
}

export default Header