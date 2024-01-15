import React, { Component } from 'react';
import './TC.scss';
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
        <div className="TC-header">TERMS & CONDITIONS</div>
        <div className="TC-content">
          <p>
            These terms and conditions outline the rules and regulations for the use of the Heeds Foundation website, accessible at <a href="https://HeedsFoundation.com">https://HeedsFoundation.com</a>.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Heeds Foundation’s website if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <ul>
            <li>By using this website you are accepting the terms and conditions. They are effective from your first visit.</li>
            <li>Heeds Foundation may change these terms and conditions from time to time; your use of the website indicates your acceptance of the terms and conditions at the time of use.</li>
            <li>Heeds Foundation reserves the right to change the content of the website at any time.</li>
            <li>Heeds Foundation has taken every precaution to make sure the content of this website is accurate and legally correct at the time of appearance. If you believe the content of any of our pages is inaccurate please contact us, email <a href="mailto:heedsfoundation.ngo@gmail.com">heedsfoundation.ngo@gmail.com</a>.</li>
            <li>Heeds Foundation accepts no liability for loss or damage, including personal injury, resulting from use of this website. Heeds Foundation makes all reasonable efforts to make sure malware or viruses are not transmitted from this website, however this cannot be guaranteed. We recommend that you safeguard your IT equipment before downloading information and files. Heeds Foundation will not accept liability for damage caused by viruses.</li>
            <li>When we provide links to other websites it does not mean that we approve of or endorse the views and information contained in the website. We accept no liability for damage caused by malware or viruses on websites that we have linked to.</li>
            <li>Please request permission before using our logos or other branded material. We reserve the right to require our logo to be removed from websites or printed material if it is not in our interests.</li>
            <li>Our downloadable documents, brochures and web pages are provided for your use. You may copy or print the information for private purpose including teaching. You may not amend the content or use it for commercial purposes without Heeds Foundation’ written consent.</li>
            <li>Images and photos used on this website are the property of Heeds Foundation or other Copyright owners. The may not be reproduced or used without Heeds Foundation’ or the copyright owner’s written consent.</li>
            <li>If there is any conflict between these terms and conditions and rules or specific terms of use relating to specific material then the latter shall prevail.</li>
          </ul>
          <p>
            Contact us
          </p>
          <p>
            If you have any questions at all about our privacy policy, please email us: <a href="mailto:heedsfoundation.ngo@gmail.com">heedsfoundation.ngo@gmail.com</a>
          </p>
        </div>
      </div>
    );
  }
}

export default TC;