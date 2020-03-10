import React, {Fragment} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../css/Footer.css";


function Footer() {
    return(
        <footer className="footer-section">
        <div className="footer-row">
            <div className="footer-col">
                <h3 className="footer-title">Islamabad avenue</h3>
                <p className="footer-text">Pir Sohawa Rd</p>
                <p className="footer-text">Islamabad, Islamabad Capital Territory</p>
                <p className="footer-text">Hours: 9AM - 12pm</p>
                <p className="footer-text">Phone: 051 2898044</p>
            </div>
            <div className="footer-col">
                <h3 className="footer-title">Lahore Avenue</h3>
                <p className="footer-text">Pir Sohawa Rd</p>
                <p className="footer-text">Islamabad, Islamabad Capital Territory</p>
                <p className="footer-text">Hours: 9AM - 12pm</p>
                <p className="footer-text">Phone: 051 2898044</p>
            </div>
            <div className="footer-col">
                <h3 className="footer-title">Follow Us</h3>
                <p className="footer-text">Instagram</p>
                <p className="footer-text">Facebook</p>
                <p className="footer-text">Pinterest</p>
                <p className="footer-text">Twitter</p>
            </div>
        </div>

    </footer>
        
    
    

    )
    
  
 
}

export default Footer;
