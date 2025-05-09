import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import logo from '../../assets/logo_new.jpg'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='deliveryweb' src={logo} alt="Logo" />
            <p>We deliver your favorite meals fast and fresh, right to your doorstep. Order online anytime, anywhere.</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="Facebook" />
              <img src={assets.twitter_icon} alt="Twitter" />
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>How It Works</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
              <li>+1 (212) 456-7890</li>
              <li>support@fooddelivery.com</li>
              <li>Mon - Sun: 8:00 AM - 10:00 PM</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        &copy; 2025 FoodDelivery.com. All rights reserved.
      </p>
    </div>
  )
}


export default Footer