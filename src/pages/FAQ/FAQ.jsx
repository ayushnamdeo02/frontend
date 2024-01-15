import React, { Component } from 'react';
import './faq.css';
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
          <title>FAQs - Heeds Foundation</title>
          <meta name="description" content="Find answers to common questions about Heeds Foundation and our initiatives in education, healthcare, sustainable development, and humanitarian response." />
          <meta name="keywords" content="Heeds Foundation FAQ, NGO FAQ, NAGPUR TOP NGO, education, community, empowerment, Heeds Foundation initiatives" />
        </Helmet>
        <div className="FAQ-header">Heeds Foundation FAQ </div>
        <div className="FAQ-body">
          <ol>
            <li>
              <strong>What is the main focus of Heeds Foundation?</strong>
              <p>We focus on empowering communities through education, healthcare, sustainable development, and humanitarian response.</p>
            </li>
            <li>
              <strong>Is Heeds Foundation a registered non-profit?</strong>
              <p>Yes, we are a registered non-profit organization dedicated to positive community change.</p>
            </li>
            <li>
              <strong>How can I donate to Heeds Foundation?</strong>
              <p>Visit our website and click on the “Donate” button. You can choose from various donation options available.</p>
            </li>
            <li>
              <strong>How is my donation used?</strong>
              <p>Donations are primarily used for our initiatives in education, healthcare, sustainable development, and humanitarian efforts.</p>
            </li>
            <li>
              <strong>Can I volunteer for Heeds Foundation?</strong>
              <p>Absolutely! Visit our website’s “Join Us” section and fill out the volunteer form.</p>
            </li>
            <li>
              <strong>How can I stay updated with Heeds Foundation’s activities?</strong>
              <p>Stay connected by following us on our social media channels and subscribing to our newsletter.</p>
            </li>
            <li>
              <strong>Do you collaborate with other organizations or institutions?</strong>
              <p>Yes, we believe in the power of collaboration and frequently partner with various organizations to maximize our impact.</p>
            </li>
            <li>
              <strong>Where are you located?</strong>
              <p>Our headquarters is in Nagpur City, but we have initiatives and projects running in various regions.</p>
            </li>
            <li>
              <strong>Can I choose a specific initiative to contribute to?</strong>
              <p>Yes, when making a donation, you can specify which initiative you’d like your funds to support.</p>
            </li>
            <li>
              <strong>Are there internship opportunities available?</strong>
              <p>Yes, we offer internships in various domains. Check our website’s “Learning Opportunities” for more details.</p>
            </li>
            <li>
              <strong>Do you organize events or workshops?</strong>
              <p>Yes, we frequently organize events, campaigns, and workshops. Stay tuned to our website and social media for announcements.</p>
            </li>
            <li>
              <strong>Can I start a Heeds Foundation chapter in my city?</strong>
              <p>We’re always open to expanding our reach. Contact our team for more information on starting a local chapter.</p>
            </li>
            <li>
              <strong>What impact has Heeds Foundation made so far?</strong>
              <p>Over the years, we’ve positively impacted thousands of lives through our initiatives. Detailed impact reports are available on our website.</p>
            </li>
            <li>
              <strong>Are there corporate partnership opportunities with Heeds Foundation?</strong>
              <p>Yes, we collaborate with corporates in various capacities. Please visit the “Partnerships” section on our website.</p>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Faq;