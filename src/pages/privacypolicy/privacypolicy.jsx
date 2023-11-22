import React, { Component } from 'react';
import './privacypolicy.css';
import Privacypolicypdf from './PrivacyPolicy_heedsfoundation.pdf'; 
import { Helmet } from 'react-helmet';

class Privacypolicy extends Component {
  render() {
    return (
      <div className='privacypolicy-container'>
        <Helmet>
          <title>Privacy Policy - Heeds Foundation</title>
          <meta name="description" content="Review the Privacy Policy of Heeds Foundation. Learn about our commitment to protecting your personal data and privacy." />
          <meta name="keywords" content="Heeds Foundation, privacy policy, data protection, personal data" />
          {/* Additional meta tags as needed */}
        </Helmet>
        <div className="privacypolicy-header">PRIVACY POLICY</div>
        <iframe title="PP" className='pdfset' src={Privacypolicypdf}></iframe>

      </div>
    );
  }
}

export default Privacypolicy;
