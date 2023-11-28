import React, { Component} from 'react';
import './contact.css';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';

class Contact extends Component {
  // Email.js configuration
  emailjsConfig = {
    serviceID: 'heedsfoundation',
    templateIDForUpdates: 'updates', // Replace with your updates template ID
    templateIDForMessages: 'message', // Replace with your message template ID
    userID: 'WHQcNmJdwJe0TKR2U',
  };
  constructor(props) {
    super(props);

    this.state = {
      subscribeClicked: false,
      messageClicked: false
    };
  }
  
  handleSubmitForUpdates = (e) => {
    e.preventDefault();
    if (!this.state.subscribeClicked) {
      this.setState({ subscribeClicked: true });
      
    emailjs
      .sendForm(
        this.emailjsConfig.serviceID,
        this.emailjsConfig.templateIDForUpdates,
        e.target, // Use the form element itself as the third parameter
        this.emailjsConfig.userID
      )
      .then((result) => {
        console.log(result.text);
        // Display a success alert
        window.alert('Updates email sent successfully.');
        // Optionally, you can reset the form here
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        // Handle email submission error here (e.g., show an error message)
      });
  };
  };

  handleSubmitForMessages = (e) => {
    e.preventDefault();
    if (!this.state.messageClicked) {
      this.setState({ messageClicked: true });
    emailjs
      .sendForm(
        this.emailjsConfig.serviceID,
        this.emailjsConfig.templateIDForMessages,
        e.target, // Use the form element itself as the third parameter
        this.emailjsConfig.userID
      )
      .then((result) => {
        console.log(result.text);
        // Display a success alert
        window.alert('Message sent successfully.');
        // Optionally, you can reset the form here
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        // Handle email submission error here (e.g., show an error message)
      });
  };
};

 

  render() {
    return (
      <div className="contact-container">
        <Helmet>
                    <title>Contact Us - Heeds Foundation</title>
                    <meta name="description" content="Get in touch with Heeds Foundation for updates and queries. Contact us via email or send us a message directly through our website." />
                    <meta name="keywords" content="Heeds Foundation contact, NGO contact, NGO phone numbers in Nagpur,NGO helpline Nagpur,NGO volunteer opportunities,nagpur, Nagpur Ngo, Nagpur social work, food donation in nagpur, ngo india, volunteer contact" />
                    {/* You can add more meta tags or structured data here */}
                </Helmet>
        <div className="contact-header">CONTACT US</div>
        <div className="contact-page-data">
          <div className="get-update">
            <h2>GET UPDATES</h2>
            <p>To receive the latest Information, please sign up here:</p>
            <form onSubmit={this.handleSubmitForUpdates} id="updates-form">
              {/* Form fields for updates */}
              <label>Email Address *</label>
              <input type="email" name="email" required />
              <label>First Name *</label>
              <input type="text" name="first_name" required />
              <label>Last Name *</label>
              <input type="text" name="last_name" required />
              <label>Phone Number</label>
              <input type="tel" name="phone" />
              <label>Address</label>
              <input type="text" name="address" />
              <label>Address Line 2</label>
              <input type="text" name="address_line2" />
              <label>City</label>
              <input type="text" name="city" />
              <label>State/Province/Region</label>
              <input type="text" name="state" />
              <label>Postal / Zip Code</label>
              <input type="text" name="postal_code" />
              <label>Country</label>
              <select name="country">
                <option value="INDIA">INDIA</option>
                <option value="USA">USA</option>
                <option value="CANADA">CANADA</option>
                <option value="NEPAL">NEPAL</option>
                {/* Add more countries if needed */}
              </select>
              <button type="submit" id="subscribeButton" disabled={this.state.subscribeClicked}>Subscribe</button>
            </form>
          </div>
          <div className="send-us-message">
            <h2>SEND US A MESSAGE</h2>
            <p>
              For Any Queries fill out the below form we will contact you
              within 24 hours or Mail us at{' '}
              <span> <a href="mailto:heedsfoundation.ngo@gmail.com"> heedsfoundation.ngo@gmail.com </a></span>
            </p>
            <form onSubmit={this.handleSubmitForMessages} id="message-form">
              {/* Form fields for messages */}
              <label>First Name *</label>
              <input type="text" name="first_name" required />
              <label>Last Name *</label>
              <input type="text" name="last_name" required />
              <label>Your Email Address *</label>
              <input type="email" name="email" required />
              <label>Your Phone Number *</label>
              <input type="tel" name="phone" required />
              <label>Subject *</label>
              <input type="text" name="subject" required />
              <label>Message *</label>
              <textarea name="message" required></textarea>
              <button type="submit" disabled={this.state.messageClicked}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
