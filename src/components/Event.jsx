import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import './Event.css'; 
import background from '../assets/Eventbg1.mp4';
import d1 from '../assets/dT1.png';
import d2 from '../assets/d1.png';
import d3 from '../assets/d2.png';
import d4 from '../assets/d3.png';
import d5 from '../assets/d4.png'; // Import Day 5 image
import d6 from '../assets/d5.jpg';

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
          {/* Wrap each event image in a Link */}
          <div className="event">
            <Link to="/event/day/1"> {/* Link to Day 1 details page */}
              <img src={d1} alt="Day 1" />
            </Link>
          </div>
          <div className="event">
            <Link to="/event/day/2"> {/* Link to Day 2 details page */}
              <img src={d2} alt="Day 2" />
            </Link>
          </div>
          <div className="event">
            <Link to="/event/day/3"> {/* Link to Day 3 details page */}
              <img src={d3} alt="Day 3" />
            </Link>
          </div>
          <div className="event">
            <Link to="/event/day/4"> {/* Link to Day 4 details page */}
              <img src={d4} alt="Day 4" />
            </Link>
          </div>
          {/* Add the Day 5 event */}
          <div className="event">
            <Link to="/event/day/5"> {/* Link to Day 5 details page */}
              <img src={d5} alt="Day 5" />
            </Link>
          </div>
          <div className="event">
            <Link to="/event/day/6"> {/* Link to Day 5 details page */}
              <img src={d6} alt="Day 6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
