import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css'; 
import background from '../assets/eb.mp4'
import d1 from '../assets/day1.png'
import d2 from '../assets/day2.png'
import d3 from '../assets/day3.png'
import d4 from '../assets/day4.png'


const Event = () => {
  return (
    <div className='events-container'>

    <video 
      src={background} 
      autoPlay 
      loop 
      muted 
      style={{ 
        width: '100%', 
        height: '100vh', 
        objectFit: 'cover', 
        position: 'fixed', 
        top: 0,
        left: 0,
        zIndex: -1 
      }} 
    />

      <br /><br />
      <h1>EVENTS</h1>
      <div className="ec">
      <div className='events'>
        <div className="event"><img src={d1} alt="" /></div>
        <div className="event"><img src={d2} alt="" /></div>
        <div className="event"><img src={d3} alt="" /></div>
        <div className="event"><img src={d4} alt="" /></div>
      </div>
      </div>
    </div>
  );
};

export default Event;
