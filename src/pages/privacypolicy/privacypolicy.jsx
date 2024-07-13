import React from 'react';
import { Helmet } from 'react-helmet';
import './privacypolicy.css';

const Privacypolicy = () => {
 return (
    <div className="privacypolicy-container">
      <Helmet>
        <title>Privacy Policy - Heeds Foundation</title>
        <meta name="description" content="This privacy policy informs you about how Heeds Foundation collects, uses, and protects the personal information you provide when you visit our website or use our services." />
      </Helmet>
      <div className="privacypolicy-header">Privacy Policy</div>
      <div className="privacypolicy-content">
        <p>Your privacy is important to us. It is Heeds Foundation's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, and other online properties.</p>

        <p>This privacy policy outlines the types of personal information we may collect from you, how we may use it, and how you can modify or delete your personal information. Unless otherwise defined in this privacy policy, terms used in this policy have the same meanings as in our terms and conditions.</p>

        <h2>What Personal Information Do We Collect?</h2>
        <p>In Short: We collect personal information such as name, address, phone number, and email when you register with us or create an account. We may also collect information when you participate in our online chat, provide us feedback, or utilize certain features of our website or services.</p>

        <h2>Why Do We Collect Your Personal Information?</h2>
        <p>We collect your personal information for various reasons, including:</p>
        <ul>
          <li>To enable user registration and account management features on our website and ensure a secure, reliable experience for our users.</li>
          <li>To process donations or contributions and provide or offer personalized support.</li>
          <li>To contact you with information about events, activities, or services that may be of interest to you.</li>
          <li>To keep our records updated and for statistical analysis and improving the website.</li>
        </ul>

        <h2>Safeguarding Your Personal Information</h2>
        <p>In Short: We adopt appropriate data collection, storage, and processing practices to protect your personal information from unauthorized access, alteration, or destruction.</p>

        <h2>Your Rights and Controlling Your Personal Information</h2>
        <p>In Short: You may review, change, or terminate your account at any time. We may also promptly delete your personal information from our records upon your request. If you have an existing account with us and no longer wish to receive marketing messages from us, you may adjust your communication preferences on our website or through our mobile apps.</p>

        <h2>Data Retention</h2>
        <p>In Short: We will retain your personal information only for as long as necessary for the purposes set out in this privacy policy unless a longer retention period is required or permitted by law.</p>

        <h2>Children's Privacy</h2>
        <p>In Short: We do not collect personal information from children under the age of 13, and we do not knowingly market to or collect personal information from children under 18.</p>

        <h2>Donation Privacy Policy</h2>
        <p>In Short: When you make a donation to Heeds Foundation, we collect personal information necessary to process your donation, including your name, contact information, and payment details. We use this information to process your donation, issue receipts, and communicate with you regarding your donation.</p>

        <p>We do not store credit card details nor do we share financial information with any third parties except for the sole purpose of processing donations.</p>

        <p>If you have any concerns about the security of your donation or wish to inquire about how your donation information is handled, please contact us using the information provided at the end of this policy.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>In Short: We may update our privacy policy from time to time. You should therefore regularly review this page to ensure you are aware of any changes.</p>

        <h2>Your Consent</h2>
        <p>By using our website or services, you consent to our privacy policy.</p>
      </div>
    </div>
 );
}

export default Privacypolicy;
