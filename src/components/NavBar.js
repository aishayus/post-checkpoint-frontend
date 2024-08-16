import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SlBookOpen } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user); // Set authentication state based on whether user data exists
    }, []); 

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    };

    return (
        <nav className='navbar'>
            <div className='nav-title'>
                <SlBookOpen className='nav-logo' />
                <Link to='/' className='nav-title-brand'>
                    T.B.L
                </Link>
            </div>
            <ul className='nav-link'>
                <li><Link className='nav-links' to='/' >Home </Link></li>
                {/* <li><Link className='nav-links' to='/create' >Post </Link></li> */}
                
                {!isAuthenticated ? 
                    <>
                        <li><Link className='nav-links' to='/signup' >Sign Up </Link></li>
                        <li><Link className='nav-links' to='/login' >Log In </Link></li>
                    </>
                    :
                    <li><Link className='nav-links' to='/' onClick={handleLogout}>LogOut</Link></li>
                }
            </ul>

            <div className='nav-search'>
                <IoSearchOutline className='nav-search-icon' />
                <input
                    type='text'
                    placeholder='Search'
                    className='nav-search-input'/>
            </div>
        </nav>
    );
};

export default NavBar;
