import React, { Component } from 'react';
import './TC.css';
import faqpdf from './Termsandcondition_heeedsfoundation.pdf'; 


class TC extends Component {
  render() {
    return (
      <div className='TC-container'>
        <div className="TC-header">TERMS & CONDITION </div>
        <iframe title="TC" className='pdfset' src={faqpdf}></iframe>

      </div>
    );
  }
}

export default TC;