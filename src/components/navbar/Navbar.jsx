import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
    <div className='nav'>
        <a href='/' className='site-title'> Randi's Shop </a> 
        <ul>
            <li>
                <a href='/menu_page'> Menu</a>
            </li>
            <li>
                <a href='/profile'> Profile</a>
            </li>
            <li>
                <a href='/checkout'> Cart</a>
            </li>
        </ul>
     
    </div>
    );
}