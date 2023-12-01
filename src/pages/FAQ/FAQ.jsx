import React, { Component } from 'react';
import './faq.css';
import faqpdf from './FAQ_Heedsfoundation.pdf'; 
import { Helmet } from 'react-helmet';

class Faq extends Component {
  render() {
    return (
      <div className='FAQ-container'>
        <Helmet>
        <h1><title>FAQs - Heeds Foundation</title></h1>
                    <meta name="description" content="Find answers to common questions about Heeds Foundation" />
                    <meta name="keywords" content="Heeds Foundation FAQ, NGO FAQ, NAGPUR TOP NGO" />
                </Helmet>
        <div className="FAQ-header">FAQ </div>
        <iframe title="FAQ" className='pdfset' src={faqpdf}></iframe>
      </div>
    );
  }
}

export default Faq;
