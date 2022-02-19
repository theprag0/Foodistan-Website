import React from 'react';
import {
  FaApple,
  FaGooglePlay,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import {Button} from "react-bootstrap"

export default function footer() {
  return (
    <>
      <footer>
        <div className='row container-fluid'>
          <div className='col-md-4 food-background' style={{padding:"0"}}></div>
          <div className='col-md-4' style={{padding:"0"}}>
            <div className='row'>
              <div className='col-6' style={{padding:"0"}}>
            <ul className='company-links'>
              <h3 className='link-head'>Company</h3>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Report</li>
              <li>Feedback</li>
            </ul>
            </div>
              <div className='col-6' style={{padding:"0"}}>
              <ul className='for-you-links'>
              <h3 className='link-head'>For you</h3>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
              <li>Become a Partner</li>
              </ul>
              </div>
            </div>
          </div>
          <div className='col-md-4 download-button-wrapper'>
            <Button type="button" variant="warning" className='download-btn'><FaApple/>Download From <br/>App Store</Button>
            <Button type="button" variant="warning" className='download-btn'><FaGooglePlay/>Download From <br/>Play Store</Button>
          </div>
        </div>
      </footer>
    </>
  );
}
