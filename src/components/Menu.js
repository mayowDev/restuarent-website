import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../css/Menu.css";

function Menu() {
  return (
    <div id="menu-section-scroll">
      <div className='daily-menu'>
        <h1 className='daily-menu-h1'>Today's</h1>
        <h2 className='daily-menu-h2'>Special Menu</h2>
        <div className="daily-menu-container">
          {/* first column */}
          <div className="daily-menu-col">
            <div className="col-large col-large-one">
              <FontAwesomeIcon icon="ice-cream" className="fa-ice-cream"/>
              <h3 className="daily-menu-h3">Deserts</h3>
              <span className="separator"></span>
              <h4 className="daily-menu-h4">ICE CREAM</h4>
              <p className="daily-menu-p">lorem ipsum lorem  ipsum, lorem  ipsum, 
                lorem  ipsum,lorem ipsum lorem  ipsum, lorem  ipsum, lorem  ipsum
              </p>
              <h4 className="daily-menu-h4"> From $9.99</h4>
            </div>
            <div className="col-large col-large-two">
              
            </div>
          </div>
          {/* second column */}
          <div className="daily-menu-col">
            <div className="col-small col-small-one">
              <FontAwesomeIcon icon="fish" className="fa-hamburger"/>
              <h3 className="col-small-h3">Dinner</h3>
              <span className="separator-orange"></span>
              <h4 className="col-small-h4">Red Salmon</h4>
              <h5 className="col-small-h5">From Rs 4999</h5>
            </div>
            <div className="col-small col-small-two"></div>
            <div className="col-small col-small-three"></div>
            <div className="col-small col-small-four">
              <FontAwesomeIcon icon="hamburger" className="fa-hamburger"/>
              <h3 className="col-small-h3">Lunch</h3>
              <span className="separator-orange"></span>
              <h4 className="col-small-h4">Chiken Biryani</h4>
              <h5 className="col-small-h5">From Rs 975</h5>
            </div>

          </div>

           {/* Third column */}
          <div className="daily-menu-col">
            <div className="col-small col-small-one">
              <FontAwesomeIcon icon="fish" className="fa-hamburger"/>
              <h3 className="col-small-h3">Dinner</h3>
              <span className="separator-orange"></span>
              <h4 className="col-small-h4">Red Salmon</h4>
              <h5 className="col-small-h5">From Rs 4999</h5>
            </div>
            <div className="col-small col-small-two"></div>
            <div className="col-small col-small-three"></div>
            <div className="col-small col-small-four">
              <FontAwesomeIcon icon="hamburger" className="fa-hamburger"/>
              <h3 className="col-small-h3">Lunch</h3>
              <span className="separator-orange"></span>
              <h4 className="col-small-h4">Chiken Biryani</h4>
              <h5 className="col-small-h5">From Rs 975</h5>
            </div>
          </div>
          
          {/* fourth column */}
          <div className="daily-menu-col">
            < div className="col-large col-large-three">
              <FontAwesomeIcon icon="utensils" className="fa-utensils"/>
              <h3 className="daily-menu-h3">Lunch</h3>
              <span className="separator"></span>
              <h4 className="daily-menu-h4">Kebab</h4>
              <p className="daily-menu-p">lorem ipsum lorem  ipsum, lorem  ipsum, 
                lorem  ipsum,lorem ipsum lorem  ipsum, lorem  ipsum, lorem  ipsum
              </p>
              <h4 className="daily-menu-h4"> From $9.99</h4>
            </div>      
            <div className="col-large col-large-four">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
