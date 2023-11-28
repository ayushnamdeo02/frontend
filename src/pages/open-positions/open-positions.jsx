import React from 'react';
import './open-positions.css';
import intern from '../../assets/images/p1.jpg';
import hire from '../../assets/images/p2.jpg';
import contribute from '../../assets/images/p3.png';
import { Helmet } from 'react-helmet';
function Openpositions() {
  return (
    <div className="open-positions-page">
      <Helmet>
        <title>Open Positions - Join Our Team</title>
        <meta name="description" content="Explore the latest job openings and career opportunities with us. Join our team and contribute to meaningful projects and initiatives." />
        <meta name="keywords" content="career opportunities, job openings, join our team, current vacancies,  internships, job opportunities, careers, non-profit jobs, Top 10 ngo in nagpur for internship, NGO jobs in Nagpur, Ngo in nagpur for internship for freshers, List of ngo in nagpur for internship, Best ngo in nagpur for internship, ngo internship certificate, ngo internship certificate in nagpur, nagpur ngo internship certificate, top 10 ngo in nagpur, ngo internship work from home," />
        {/* Additional meta tags as needed */}
      </Helmet>

      <div className="open-positions-header">OPEN POSITIONS</div>
      <div className='opp-elements'>
            <img className='opp-img' src={intern} alt='job1'></img>
            <img className='opp-img' src={hire} alt='job2'></img>
            <img className='opp-img' src={contribute} alt='job2'></img>
          </div>
    </div>
  );
}

export default Openpositions;
