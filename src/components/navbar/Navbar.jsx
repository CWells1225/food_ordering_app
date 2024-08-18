import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
    <header>    
        <div className='nav'>
            <ul>
                <li>
                    <a href='/'> Home</a>
                </li>
                <li>
                    <a href='/menu_page' className='menu-btn'> ORDER ONLINE </a>
                </li>
                <li>
                    <a href='/checkout'> Cart</a>
                </li>
            </ul>
        </div>    
    </header>
     
   
    );
}