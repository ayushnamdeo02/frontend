import React, { Component } from 'react';
import './privacypolicy.css';
import Privacypolicypdf from './PrivacyPolicy_heedsfoundation.pdf'; 


class Privacypolicy extends Component {
  render() {
    return (
      <div className='privacypolicy-container'>
        <div className="privacypolicy-header">PRIVACY POLICY</div>
        <iframe title="PP" className='pdfset' src={Privacypolicypdf}></iframe>

      </div>
    );
  }
}

export default Privacypolicy;
