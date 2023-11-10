import React, { useEffect, useState } from 'react';
import './internship-jobs.css';
import vairagi from '../../assets/images/partners/vairagi.jpg';
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
