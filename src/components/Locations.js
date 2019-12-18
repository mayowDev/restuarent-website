import React from "react";
import "../css/Locations.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Locations() {
  return (
    <Router>
      <div className='locations-section'>
        <div className='location discover discover-border'>
          <div className='discover-overlay'>
            <h1 className='discover-h1'>Discover</h1>
            <h2 className='discover-h2'>our story</h2>
            <p className='discover-p'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              placeat nisi, facilis sunt provident quae quo exercitationem iure
            </p>
            <Link className='discover-link' to='/about'>
              About us
            </Link>
          </div>
        </div>
        <div className='location lhr'></div>
        <div className='location isb'></div>
      </div>
    </Router>
  );
}

export default Locations;
