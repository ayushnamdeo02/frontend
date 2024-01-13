import React, { Component } from 'react';
import teamMembers from '../about/teammembers';
import core from '../about/core';
import './team.css';

class Team extends Component {

    render() {
        return(
          <div className="who-container" data-keywords="education, community, empowerment, NGO, Heeds Foundation">
          <h2 className='section-who-heading'>WHO WE ARE</h2>
           <h4 className='section-who-subheading1'>COMMITTEE</h4>
          <div class="line"></div>
          <div className='team-members'>
        {teamMembers.map((member, index) => (
          <div key={index} className='team-member'>
            <div className='image-card'>
                <img className="image" src={member.photoUrl} alt={`${member.name}'`}  ></img>
              </div>
            <h3 className='member-name'>{member.name}</h3>
            <p className='member-designation'>{member.designation}</p>
            <div className="card-content">
                <ul className="social-links">
                  <li>
                    <a href={member.socialLinks.facebook} className="fa fa-facebook" aria-label="Facebook"> </a>
                  </li>
                  <li>
                    <a href={member.socialLinks.twitter} className="fa fa-twitter" aria-label="Twitter"> </a>
                  </li>
                  <li>
                    <a href={member.socialLinks.Instagram} className="fa fa-instagram" aria-label="Instagram"> </a>
                  </li>
                  <li>
                    <a href={member.socialLinks.linkedin} className="fa fa-linkedin" aria-label="LinkedIn"> </a>
                  </li>
                </ul>
              </div>
          </div>
        ))}
      </div>
      <h4 className='section-who-subheading1'>EXECUTIVE BOARD</h4>
          <div class="line"></div>
          <div className='our-team-body'>
          {core.map((member, index) => (
            <div key={index} className="our-team">
              <div className="picture">
                <img className="img-fluid" src={member.imageURL} alt="Team Member" />
              </div>
              <div className="team-content">
                <h3 className="name">{member.name}</h3>
                <h4 className="title">{member.title}</h4>
              </div>
              <ul className="social">
                <li>
                  <a href={member.socialLinks.facebook} className="fa fa-facebook" aria-label="Facebook"> </a>
                </li>
                <li>
                  <a href={member.socialLinks.twitter} className="fa fa-twitter" aria-label="Twitter" > </a>
                </li>
                <li>
                  <a href={member.socialLinks.Instagram} className="fa fa-instagram" aria-label="Instagram"> </a>
                </li>
                <li>
                  <a href={member.socialLinks.linkedin} className="fa fa-linkedin" aria-label="LinkedIn"> </a>
                </li>
              </ul>
            </div> 
          ))}
        </div> </div>
  );
}}

export default Team;
