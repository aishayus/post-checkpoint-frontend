import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-links'>
                <Link to='/' className='footer-link'>Home</Link>
            </div>
            <p className='footer-text'>&copy; 2024 The Book Lovers. All rights reserved.</p>
        </div>
        </footer>
    );
};

export default Footer;
