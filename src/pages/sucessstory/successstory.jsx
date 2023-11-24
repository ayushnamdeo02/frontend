import React, { Component } from 'react';
import './successstory.css';
import { Helmet } from 'react-helmet';
import testimonialData from './ss';

class Successstory extends Component {
  state = {
    expanded: {}
  };

  toggleReadMore = (index) => {
    this.setState(prevState => ({
      expanded: {
        ...prevState.expanded,
        [index]: !prevState.expanded[index]
      }
    }));
  };

  render() {
    return (
      <div className="successstory-page">
        <Helmet>
        <title>Success Stories - Inspiring Journeys</title>
        <meta name="description" content="Read the inspiring success stories from our community. Discover how our initiatives have made a real difference in people's lives." />
        <meta name="keywords" content="success stories, inspiring journeys, community impact, life-changing stories" />
        {/* Additional meta tags as needed */}
      </Helmet>
        <div className="successstory-header">SUCCESS STORY</div>
        <section className="testimonials-section">
          <h2>Testimonials</h2>
          <div className="testimonials-container">
            {testimonialData.map((test, index) => {
              const isExpanded = this.state.expanded[index];
              const shouldShowReadMore = test.text.split(' ').length > 100;
              const displayedText = isExpanded ? test.text : test.text.split(' ').slice(0, 67).join(' ') + '...';
              
              return (
                <div key={index} className="testimonial">
                  <img src={test.image} alt={test.name} className="testimonial-image" />
                  <div className="testimonial-content">
                    <p className="testimonial-text">{displayedText}</p>
                    {shouldShowReadMore && (
                      <button onClick={() => this.toggleReadMore(index)}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                    <p className="testimonial-author">{test.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default Successstory;
