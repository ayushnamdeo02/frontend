import React, { Component } from 'react';
import './faq.css';
import faqpdf from './FAQ_Heedsfoundation.pdf'; 
import { Helmet } from 'react-helmet';

class Faq extends Component {
  componentDidMount() {
    // Keywords string
    const keywords = "education, community, empowerment, NGO, Heeds Foundation";

    // Split keywords string into an array and log it
    const keywordsArray = keywords.split(', ');
    console.log(keywordsArray);
}
  render() {
    return (
      <div className='FAQ-container' data-keywords="education, community, empowerment, NGO, Heeds Foundation">
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
