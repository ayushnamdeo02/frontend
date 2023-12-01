import React, { Component } from 'react';
import './successstory.css';
import { Helmet } from 'react-helmet';
import testimonialData from './ss';

class Successstory extends Component {
  componentDidMount() {
    // Keywords string
    const keywords = "education, community, empowerment, NGO, Heeds Foundation";

    // Split keywords string into an array and log it
    const keywordsArray = keywords.split(', ');
    console.log(keywordsArray);
}
  render() {
    return (
      <div className="successstory-page" data-keywords="education, community, empowerment, NGO, Heeds Foundation">
        <Helmet>
        <h1><title>Success Stories - Inspiring Journeys</title></h1>
          <meta name="description" content="Read the inspiring success stories from our community. Discover how our initiatives have made a real difference in people's lives." />
          <meta name="keywords" content="success stories, inspiring journeys, community impact, life-changing stories" />
          {/* Additional meta tags as needed */}
        </Helmet>
        <div className="successstory-header">SUCCESS STORY</div>
        <section className="testimonials-section">
          <h2>Testimonials</h2>
          <div className="testimonials-container">
            {testimonialData.map((test, index) => (
              <div key={index} className="testimonial">
                <img src={test.image} alt={test.name} className="testimonial-image" />
                <div className="testimonial-content">
                  <div className="testimonial-text">{test.text}</div>
                  <p className="testimonial-author">{test.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Successstory;
