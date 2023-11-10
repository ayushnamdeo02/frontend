import React, { Component } from 'react';
import './community.css';

class Community extends Component {
  render() {
    return (
      <div className='community-container'>
        <div className='community-header'>Community </div>
        <iframe title='social' className= "frameinsta"src="https://embedsocial.com/api/pro_hashtag/c504ec4034d6a8136795c2ae9d7e2e99d8118ad1" width="90%" height="700px" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        <iframe title='social' className= "frameinsta" src='https://widgets.sociablekit.com/medium-publication-feed/iframe/199138' frameborder='0' width='90%' height='700px' ></iframe>
        
      </div>
    );
  }
}

export default Community;
