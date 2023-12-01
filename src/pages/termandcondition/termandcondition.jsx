import React, { Component } from 'react';
import './TC.css';
import faqpdf from './Termsandcondition_heeedsfoundation.pdf'; 
import { Helmet } from 'react-helmet';

class TC extends Component {
  componentDidMount() {
    // Keywords string
    const keywords = "education, community, empowerment, NGO, Heeds Foundation";

    // Split keywords string into an array and log it
    const keywordsArray = keywords.split(', ');
    console.log(keywordsArray);
}
  render() {
    return (
      <div className='TC-container' data-keywords="education, community, empowerment, NGO, Heeds Foundation">
        <Helmet>
          <title>Terms & Conditions - Heeds Foundation</title>
          <meta name="description" content="Read the Terms and Conditions of Heeds Foundation. Understand the policies and guidelines that govern the use of our services and participation in our programs." />
          <meta name="keywords" content="Heeds Foundation, terms and conditions, policies, guidelines" />
          {/* Additional meta tags as needed */}
        </Helmet>
        <div className="TC-header">TERMS & CONDITION </div>
        <iframe title="TC" className='pdfset' src={faqpdf}></iframe>

      </div>
    );
  }
}

export default TC;