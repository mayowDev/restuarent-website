import React from "react";
import "../css/Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
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
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/locations'>locations</Link>
            </li>
            <li>
              <Link to='/search'>
                <i className='fa fa-search'></i>
              </Link>
            </li>
            <li>
              <Link to='/booking'>
                <i className='fa fa-shopping-bag'></i>
              </Link>
            </li>
          </ul>
        </nav>
        <h2 className='header-title'>Welcome to</h2>
        <h1 className='header-description'>Monal Restaurant</h1>
        <Link className='header-cta-btn' to='#'>
          Book A Table
        </Link>
      </header>
    </Router>
  );
}

export default Header;
