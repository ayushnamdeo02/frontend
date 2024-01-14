import React, { useEffect, useState } from 'react';
import './internship-jobs.css';
import vairagi from '../../assets/images/partners/vairagi.webp';
import { Helmet } from 'react-helmet';
function Internshipjobs() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/10wxWTmMmNuxqU7YENwhuHpmVxao9HDQ7BcOrbn8OaAU/export?format=csv')
      .then(response => response.text())
      .then(data => {
        const csvData = data.split('\n').map(row => row.split(','));
        setData(csvData);
      });
  }, []);
  
  return (
    <div className="internship-jobs-page">
      <Helmet>
      <h1><title>Internship and Job Opportunities - Heeds Foundation</title></h1>
        <meta name="description" content="Explore internship and job opportunities with Heeds Foundation. Join us to make a difference in fields like education, healthcare, and community development." />
        <meta name="keywords" content="Heeds Foundation, internships, job opportunities, careers, non-profit jobs, Top 10 ngo in nagpur for internship, NGO jobs in Nagpur, Ngo in nagpur for internship for freshers, List of ngo in nagpur for internship, Best ngo in nagpur for internship, ngo internship certificate, ngo internship certificate in nagpur, nagpur ngo internship certificate, top 10 ngo in nagpur, ngo internship work from home, upay ngo nagpur" />
        {/* Additional meta tags as needed */}
      </Helmet>
      <div className="internship-jobs-header">OTHER INTERNSHIP / JOBS</div>
      <div className='internshipjobheader'>
        <div className= "internshipjobheading">LEARNING PARTNER</div>
        <img src={vairagi} alt='vairagi learning'></img>
        </div>
      <div className='internship'>
        <table className="internship-jobs-table">
          <thead>
            <tr>
              {data[0]?.map(header => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => {
                  if (cellIndex === row.length - 1) {
                    // Assuming the last column is the "Apply link" column
                    return (
                      <td key={cell}>
                        <a href={cell} target="_blank" rel="noreferrer">CLICK HERE TO APPLY</a>
                      </td>
                    );
                  }
                  return <td key={cell}>{cell}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Internshipjobs;
