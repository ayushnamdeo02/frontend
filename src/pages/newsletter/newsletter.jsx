import React from 'react';
import './newsletter.css';
import { Helmet } from 'react-helmet';
function Newsletter() {
  return (
    <div className="newsletter-page">
      <Helmet>
      <h1><title>Stay Updated - Newsletter Subscription</title></h1>
        <meta name="description" content="Subscribe to our newsletter to stay updated with the latest news, events, and stories. Join our community to be a part of the change." />
        <meta name="keywords" content="newsletter, updates, subscribe, news, events" />
        {/* Additional meta tags as needed */}
      </Helmet>
      <div className="newsletter-header">NEWSLETTER</div>
    </div>
  );
}

export default Newsletter;
