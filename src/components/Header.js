import React,{useEffect, useState} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../css/Header.css";

function Header() {
  const [Cart, setCart] = useState('0')
  return (
    <Router>
      <header>
        <nav>
          <h2 className='logo'>
            <Link to='/'>The Monal..</Link>
          </h2>
          <ul className='nav-menu'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <a href="#menu-section-scroll" >Menu</a>
            </li>
            <li>
              <Link to='/locations'>locations</Link>
            </li>
            <li>
              <Link to='/search'>
                <FontAwesomeIcon icon="search" className="fa-search"/>
              </Link>
            </li>
            <li>
              <Link to='/booking'>
                <FontAwesomeIcon icon="shopping-bag" className="fa-shopping-bag"/>
              </Link>
            </li>
          </ul>
        </nav>
        <h2 className='header-title'>Welcome to</h2>
        <h1 className='header-description'>Monal Restaurant</h1>
        <Link className='header-cta-btn' to='#booking'>
          Book A Table
        </Link>
      </header>
    </Router>
  );
}

export default Header;
