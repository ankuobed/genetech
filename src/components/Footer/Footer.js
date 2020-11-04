import React from 'react'
import { Email, Facebook, Twitter, Instagram } from '@material-ui/icons'

import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__item'><Email /> genetech@gmail.com</div>
            <div className='footer__item'>
                <Facebook />
                <Twitter />
                <Instagram />
            </div>
            <div className='footer__item'>&#169; 2020, genetech</div>
        </footer>
    )
}

export default Footer
