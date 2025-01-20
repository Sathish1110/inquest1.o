import React from 'react';
import { useParams } from 'react-router-dom';
import d1 from '../assets/day1.png'; // Import images
import d2 from '../assets/day2.png';
import d3 from '../assets/day3.png';
import d4 from '../assets/day4.png';
import background from '../assets/Eventbg2.mp4'
import './DayDetail.css';  // Import the CSS file

const dayPosters = {
  1: d1,  // Use imported images
  2: d2,
  3: d3,
  4: d4
};

const DayDetail = () => {
  const { dayId } = useParams();

  const dayDetails = {
    1: {
      description: "Detailed description for Day 1 events. Here you can provide more information about the events happening on Day 1, the schedule, speakers, and much more.",
      poster: dayPosters[1]
    },
    2: {
      description: "Detailed description for Day 2 events. Include schedules, keynotes, and activities planned for Day 2.",
      poster: dayPosters[2]
    },
    3: {
      description: "Detailed description for Day 3 events. Highlight special activities, guest speakers, or panel discussions.",
      poster: dayPosters[3]
    },
    4: {
      description: "Detailed description for Day 4 events. Wrap up the event with important sessions and keynotes.",
      poster: dayPosters[4]
    }
  };

  return (
    <div className="day-detail-container">
      {/* YouTube video as background */}
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

      {/* Split screen layout */}
      <div className="split-screen">
        <div className="image-container">
          <img className="day-poster" src={dayDetails[dayId].poster} alt={`Day ${dayId} Poster`} />
        </div>
        <div className="description-container">
          <h1>Details for Day {dayId}</h1>
          <p>{dayDetails[dayId].description}</p>
        </div>
      </div>

    </div>
  );
};

export default DayDetail;
