import React from "react";
import "../css/Services.css";

function Services() {
  return (
    <div className='specialities-section'>
      <div className='middle'>
        <h1 className='middle-h1'>Specialities</h1>
        <h2 className='middle-h2'>Our Services</h2>
        <div className='row'>
          <div className='col'>
            <div className='image1'>
              <div className='service-overlay'>
                <div className='service-overlay-border'>View Our Full Menu</div>
              </div>
            </div>
            <h3 className='col-h3'>BREAKFAST</h3>
          </div>
          <div className='col'>
            <div className='image2'>
              <div className='service-overlay'>
                <div className='service-overlay-border'>View Our Full Menu</div>
              </div>
            </div>
            <h3 className='col-h3'>LUNCH</h3>
          </div>
          <div className='col'>
            <div className='image3'>
              <div className='service-overlay'>
                <div className='service-overlay-border'>View Our Full Menu</div>
              </div>
            </div>
            <h3 className='col-h3'>DINNER</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
