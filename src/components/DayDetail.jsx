import React from 'react';
import { useParams } from 'react-router-dom';
import d1 from '../assets/dpt1.jpg';
import d2 from '../assets/dpe1.jpg';
import d3 from '../assets/dp2.jpg';
import d4 from '../assets/dp3.jpg';
import d5 from '../assets/dp4.jpg'; // Add Day 5 image import
import d6 from '../assets/dp5.jpg';
import background from '../assets/Eventbg2.mp4';
import './DayDetail.css';

const dayPosters = {
  1: d1,
  2: d2,
  3: d3,
  4: d4,
  5: d5,
  6: d6
};

const dayDetails = {
  1: {
    description: "சிந்தனையின் விதைகளை நட்டுப் புதிய உலகங்களை கண்டுபிடிக்கலாம்! தமிழ் மரபும் நவீன எண்ணங்களும் இணையும் சிறப்பு நிகழ்வு.",
    poster: dayPosters[1],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header"
  },
  2: {
    description: "Embark on a quest through books and beyond! Discover knowledge and ignite curiosity in this exciting literary challenge",
    poster: dayPosters[2],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header"
  },
  3: {
    description: "Wizarding Quest: Unraveling Tales and Trivia - Step into an enchanting world of stories and embark on a magical journey through the realms of literature. Share your thoughts, weave your imagination, and bring captivating characters to life. Dive into thrilling tales, unravel hidden mysteries, and explore the magic of words. Let your creativity shine as you express your ideas and shape unforgettable adventures. Join us in this exciting quest and let the power of storytelling ignite your imagination!.",
    poster: dayPosters[3],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header"
  },
  4: {
    description: "Captivate the Richness of Cultures - Step onto the stage and embrace the beauty of diversity with every move you make. Let your commanding gaze captivate the audience, while your iconic walk leaves an indelible mark, setting the earth ablaze with your passion. Showcase your vibrant talents and bring your unique flair to the spotlight. Celebrate the richness of cultures and let your individuality shine. Unleash your charisma, own the stage, and make every moment unforgettable!",
    poster: dayPosters[4],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header"
  },
  5: {
    description: "Welcome to Twistopia—a realm where puzzles meet purpose, and imagination unlocks endless possibilities. Here, every challenge you encounter isn’t just a test of skill, but a doorway to growth and discovery. With each puzzle, you’ll push your boundaries, explore new dimensions of creativity, and uncover hidden strengths you never knew existed. It’s a place where your potential is limitless, and every step forward is a leap toward becoming the best version of yourself. Ready to embark on this transformative journey? The path to greatness begins now—let’s redefine your destiny together!",
    poster: dayPosters[5], // Add Day 5 description and poster
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header"
  },
  6: {
    description: "Join us for a unique storytelling event where participants will be given key hints to weave into a captivating narrative. Attendees will work together to piece these clues into a cohesive story, filled with twists, turns, and creative flair. Whether you're an experienced writer or just love a good story, this event promises an engaging and imaginative challenge. Let your creativity run wild and see where the hints take you in crafting a memorable tale. Don't miss out on this chance to share and hear some fantastic stories.",
    poster: dayPosters[6], // Add Day 6 description and poster
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header"
  }
};

const DayDetail = () => {
  const { dayId } = useParams();

  // Get the details for the current day
  const currentDayDetails = dayDetails[dayId];

  return (
    <div className="day-detail-container">
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
      <div className="split-screen">
        <div className="image-container">
          <img className="day-poster" src={currentDayDetails.poster} alt={`Day ${dayId} Poster`} />
        </div>
        <div className="description-container">
          <h1>ITINERARY </h1>
          <p>{currentDayDetails.description}</p>
          <a href={currentDayDetails.formUrl} target="_blank" rel="noopener noreferrer">
            <button className="register-button">Register</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DayDetail;
