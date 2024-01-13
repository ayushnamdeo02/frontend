import React, { Component } from 'react';
import './report.css';
import certificate from '../../assets/images/certificate.webp';
import { Helmet } from 'react-helmet';

class Report extends Component {

    render() {
        const googleDriveEmbedLink = "https://drive.google.com/embeddedfolderview?id=1IWJDVxKTNzXn8NcKlyNfO7iqod3sq0ON#grid";
        return(
    <div className="report-page">
      <Helmet>
      <h1><title>REPORT - Join Our Team</title></h1>
        <meta name="description" content="Explore the latest job openings and career opportunities with us. Join our team and contribute to meaningful projects and initiatives." />
        <meta name="keywords" content="career opportunities, job openings, join our team, current vacancies,  internships, job opportunities, careers, non-profit jobs, Top 10 ngo in nagpur for internship, NGO jobs in Nagpur, Ngo in nagpur for internship for freshers, List of ngo in nagpur for internship, Best ngo in nagpur for internship, ngo internship certificate, ngo internship certificate in nagpur, nagpur ngo internship certificate, top 10 ngo in nagpur, ngo internship work from home," />
        {/* Additional meta tags as needed */}
      </Helmet>

      <div className="report-header">REPORT</div>
      <div className='report-content'>
      <iframe className='report-drive' frameborder="0" src={googleDriveEmbedLink} title="Google Drive Folder">
        </iframe>

        <h4 className='documents-subheading'>Documents</h4>
          <div class="line"></div>
        <img className="certificate" src={certificate} alt="" />
    </div></div>
  );
}}

export default Report;
