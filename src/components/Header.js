import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';


function Header() {
  return (
    <div className='header'>
        <div className='logod'>
            <h1 href='#'>SnapLib Inc.</h1>
        </div>
        <div className='navb'>
            <Link to="/" >Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/photography'>Photography</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/gallery'>Gallery</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/about'>About</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/contact'>Contact</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    </div>
  );
};

export default Header;