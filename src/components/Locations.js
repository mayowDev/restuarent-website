import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "../css/Locations.css";

function Locations() {
  return (
    <Router>
      <div className='locations-section'>
        <div className='location discover discover-border'>
          <div className='discover-overlay'>
            <h1 className='discover-h1'>Discover</h1>
            <h2 className='discover-h2'>our Story</h2>
            <p className='discover-p'>
              The Monal – named after a pheasant of rare and exquisite beauty
              dwelling a little further north – epitomes this amalgam of the
              modern and the ancient. The resort is a touch of modernity set in
              pastoral idyll.
            </p>
            <Link className='discover-link' to='/about'>
              Learn More
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
