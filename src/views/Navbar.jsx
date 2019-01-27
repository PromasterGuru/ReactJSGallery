import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo.png';
const Navbar = () => {
    return (
    <nav className='navbar navbar-expand-lg navbar navbar-dark bg-dark'>
        <Link to="/" className="navbar-brand"><img src={logo} alt="Logo" id="logo" /></Link>
        <ul className='nav navbar-nav navbar-right'>
            <li className='nav-link'><NavLink to='/' id="nv">Home</NavLink></li>
            <li className='nav-link'><NavLink to='/gallery'>Gallery</NavLink></li>
            <li className='nav-link' ><NavLink to='/contact'>Contact Us</NavLink></li>
        </ul>
    </nav>
    );
};

export default Navbar;
