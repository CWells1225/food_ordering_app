import React,{useState,useEffect} from 'react';
import './navbar.css';

export default function Navbar() {
    const[scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
         
          if (scrollTop > 16) { // You can adjust the 100 value based on when you want to trigger the class change
            setScroll(true);
          } else {
            setScroll(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
    <header className={scroll ? 'darken' : ''}>    
        <div className='nav'>
            <ul>
                <li>
                    <a href='/'> Home</a>
                </li>
                <li>
                    <a href='/menu-page' className='menu-btn'> ORDER ONLINE </a>
                </li>
                <li>
                    <a href='/checkout'> Cart</a>
                </li>
            </ul>
        </div>    
    </header>
     
   
    );
}