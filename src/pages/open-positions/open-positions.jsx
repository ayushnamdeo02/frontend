import React from 'react';
import './open-positions.css';
import intern from '../../assets/images/p1.jpg';
import hire from '../../assets/images/p2.jpg';
import contribute from '../../assets/images/p3.png';
function Openpositions() {
  return (
    <div className="open-positions-page">
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
