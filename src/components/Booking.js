import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/Booking.css";

function Booking(){
    return(
        <div className="booking-section">
            <h1 className="booking-h1"> Reservation </h1>
            <h2 className="booking-h2"> Book a table </h2>
            <div className="booking-row">
                <div className="single-column">
                    <span className="booking-icon">
                        <FontAwesomeIcon icon="calendar"/>
                    </span>
                    <input type="text" className="booking-input" placeholder="Select date"/>
                </div>
                <div className="single-column">
                    <span className="booking-icon">
                        <FontAwesomeIcon icon="clock"/>
                    </span>
                    <input type="text" className="booking-input" placeholder="Select Time"/>
                </div>
                <div className="single-column">
                    <span className="booking-icon">
                        <FontAwesomeIcon icon="user-check"/>
                    </span>
                    <input type="text" className="booking-input" placeholder="Select a seat"/>
                </div>
                <a href="#booked" className="submit-booking">Book A Table</a>
            </div>

        </div>
    )
}


export default Booking;