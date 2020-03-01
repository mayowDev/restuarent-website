import React from "react";
import "../css/Menu.css";

function Menu() {
  return (
    <div>
      <div className='daily-menu'>

        <h1 className='daily-menu-h1'>Today's</h1>
        <h2 className='daily-menu-h2'>Special Menu</h2>
        <div className="daily-menu-container">
          <div className="daily-menu-col">
            <div className="col-large col-large-one">
              <i className="fa fa-birthday-cake"></i>
              <h3 className="daily-menu-h3">Deserts</h3>
              <span className="separator"></span>
              <h4 className="daily-menu-h4">ICE CREAM</h4>
              <p className="daily-menu-p">lorem ipsum lorem  ipsum, lorem  ipsum, 
                lorem  ipsum,lorem ipsum lorem  ipsum, lorem  ipsum, lorem  ipsum
              </p>
              <h4 className="daily-menu-h4"> From $9.99</h4>
            </div>
            <div className="col-large col-large-two"></div>
          </div>
          <div className="daily-menu-col"></div>
          <div className="daily-menu-col"></div>
          <div className="daily-menu-col">
          <div className="col-large col-large-three">
            <i className="fa fa-utensils"></i>
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
        <h1 className='daily-menu-h1'>To Day's</h1>
        <h2 className='daily-menu-h2'>Special Menu</h2>

      </div>
    </div>
  );
}

export default Menu;
