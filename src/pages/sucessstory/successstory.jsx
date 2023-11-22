import React from 'react';
import './successstory.css';
import { Helmet } from 'react-helmet';
function Successstory() {
  return (
    <div className="successstory-page">
      <Helmet>
        <title>Success Stories - Inspiring Journeys</title>
        <meta name="description" content="Read the inspiring success stories from our community. Discover how our initiatives have made a real difference in people's lives." />
        <meta name="keywords" content="success stories, inspiring journeys, community impact, life-changing stories" />
        {/* Additional meta tags as needed */}
      </Helmet>
      <div className="successstory-header">SUCCESS STORY</div>
    </div>
  );
}

export default Successstory;
