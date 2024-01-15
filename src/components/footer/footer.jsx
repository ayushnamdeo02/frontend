import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { Helmet } from 'react-helmet';

class Footer extends Component {
  handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  render() {
    return (
      <footer className="footer-container">
         <Helmet>
          <title>Heeds Foundation - Community Welfare</title>
          <meta name="description" content="Heeds Foundation is a non-profit organization dedicated to community welfare. Contact us for donations and inquiries." />
        </Helmet>
        <div className='footer-btns'>
          <Link className="btns-style" to='/contact' onClick={this.handleLinkClick}>Contact</Link>
          <Link className="btns-style" to='/contact' onClick={this.handleLinkClick}>Donate</Link>
        </div>
        <div className='columns-footer'>
        <div className='pages-link'>
          <Link className='page-link' to='/about' onClick={this.handleLinkClick}>About</Link>
          <Link className='page-link' to='/contact' onClick={this.handleLinkClick}>Contact</Link>
          <Link className='page-link' to='/join' onClick={this.handleLinkClick}>Join Us</Link>
          <Link className='page-link' to='/contact' onClick={this.handleLinkClick}>Donate</Link>
          </div>
          <div className='footer-find-us'>
          <h3>Find Us</h3>
            <p>04, Vidyapati Nagar,<br/>Nagpur, INDIA</p>
            <a href='https://www.google.com/maps/place/Vidyapati+Nagar,+Digdoh,+Nildoh+ct,+Maharashtra/@21.1023649,79.0053228,17z/data=!4m10!1m2!2m1!1s04,+Vidyapati+Nagar+Hingna,Nagpur+location+map+link!3m6!1s0x3bd4955ab206377b:0xcbd0f820be57b105!8m2!3d21.1039916!4d79.0081715!15sCjMwNCwgVmlkeWFwYXRpIE5hZ2FyIEhpbmduYSxOYWdwdXIgbG9jYXRpb24gbWFwIGxpbmuSAQxuZWlnaGJvcmhvb2TgAQA!16s%2Fg%2F11gjp88xyb?entry=ttu'>Click Here for Map</a>
          </div>
          <div className="footer-contact-info">
            <h3>Contact Us</h3>
            <a href="tel:+918788411441">(+91) 878 841 1441 </a> 
            <a href="mailto:heedsfoundation.ngo@gmail.com"> heedsfoundation.ngo@gmail.com </a>
          </div>
          
            <div className='social-links-footer'>
            <div className="social-icon">
              <a href="https://facebook.com/Heedsfoundation/"><i className="fa fa-facebook"></i></a>
            </div>
            <div className="social-icon">
              <a href="https://twitter.com/Heedsfoundation?s=08"><i className="fa fa-twitter"></i></a>
            </div>
            <div className="social-icon">
              <a href="https://instagram.com/heedsfoundation?igshid=ZDc4ODBmNjlmNQ=="><i className="fa fa-instagram"></i></a>
            </div>
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/heeds-foundation/ "><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="social-icon">
              <a href="https://youtube.com/"><i className="fa fa-youtube"></i></a>
            </div>
            </div>
          </div>
          <div className='links-bottom'>
            <Link className='link-page' to='/privacypolicy' onClick={this.handleLinkClick}>PRIVACY POLICY</Link>
          <Link className='link-page' to='/faq' onClick={this.handleLinkClick}>FAQ</Link> 
          <Link className='link-page' to='/termandcondition' onClick={this.handleLinkClick}>TERM OF USE</Link>
          </div>  
        <div className='lower'>
            <p className='p1'>Copyright © 2024</p>
            <p className='p2'>Designed with ❤️ From <a href="https://heedsfoundation.com/"> Heeds Foundation  </a> </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
