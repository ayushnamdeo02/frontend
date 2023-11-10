import React, { Component } from 'react';
import './faq.css';
import faqpdf from './FAQ_Heedsfoundation.pdf'; 


class Faq extends Component {
  render() {
    return (
      <div className='FAQ-container'>
        <div className="FAQ-header">FAQ </div>
        <iframe title="FAQ" className='pdfset' src={faqpdf}></iframe>

      </div>
    );
  }
}

export default Faq;
