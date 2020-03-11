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
                <p className="footer-text">Islamabad Capital Territory</p>
                <p className="footer-text">Hours: 9AM - 12pm</p>
                <p className="footer-text">Phone: 051 2898044</p>
            </div>
            <div className="footer-col">
                <h3 className="footer-title">Lahore Avenue</h3>
                <p className="footer-text">Pir Sohawa Rd</p>
                <p className="footer-text">Lahore near Hafiz center</p>
                <p className="footer-text">Hours: 9AM - 12pm</p>
                <p className="footer-text">Phone: 051 2898044</p>
            </div>
            <div className="footer-col">
                <h3 className="footer-title">Opening Hours</h3>
                <p className="footer-text">Monday - Thursday</p>
                <p className="footer-text">9:00 am - 1:00 am</p>
                <p className="footer-text">Friday - Sunday </p>
                <p className="footer-text">11:00 am - 3:00 am</p>
            </div>
            <div className="footer-col">
                <h3 className="footer-title">News Letter</h3>
                <input placeholder="Enter your email..." type="email" className="footer-email"/>
                <a className="footer-subscribe-btn">Subscribe</a>
                <FontAwesomeIcon icon={['fab', 'facebook-square']} className="social-media" />
                <FontAwesomeIcon icon={['fab', 'instagram-square']} className="social-media"/>
                <FontAwesomeIcon icon={['fab', 'pinterest-square']} className="social-media"/>
                
                <FontAwesomeIcon icon="twitter" className="social-media"/>
                
            </div>
            {/* <div className="footer-col">
                <h3 className="footer-title">Follow Us</h3>
                <p className="footer-text">Instagram</p>
                <p className="footer-text">Facebook</p>
                <p className="footer-text">Pinterest</p>
                <p className="footer-text">Twitter</p>
            </div> */}
        </div>

    </footer>
        
    
    

    )
    
  
 
}

export default Footer;
