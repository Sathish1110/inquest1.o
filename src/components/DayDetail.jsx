import React from 'react';
import { useParams } from 'react-router-dom';
import d1 from '../assets/dpt1.jpg';
import d2 from '../assets/dpe1.jpg';
import d3 from '../assets/dp2.jpg';
import d4 from '../assets/dp3.jpg';
import d5 from '../assets/dp4.jpg';
import d6 from '../assets/dp5.jpg';
import background from '../assets/Eventbg2.mp4';
import ar from '../assets/amrudha.jpg';
import c from '../assets/cyril.jpg';
import dd from '../assets/deva.jpg';
import d from '../assets/durga1.jpg';
import harha from '../assets/harshavaradhan.jpg';
import h from '../assets/hindu.jpg';
import m from '../assets/mahati.jpg';
import mu from '../assets/muthurama.jpg';
import p from '../assets/pragadesh.jpg';
import r from '../assets/reshma.jpg';
import s from '../assets/saranya.jpg';
import sw from '../assets/sathish2.jpg';
import b9 from '../assets/b9.jpg'; 
import './DayDetail.css';

const dayPosters = {
  1: d1,
  2: d2,
  3: d3,
  4: d4,
  5: d5,
  6: d6,
};

const dayDetails = {
  1: {
    description: 'சிந்தனையின் விதைகளை நட்டுப் புதிய உலகங்களை கண்டுபிடிக்கலாம்! தமிழ் மரபும் நவீன எண்ணங்களும் இணையும் சிறப்பு நிகழ்வு.',
    poster: dayPosters[1],
    // formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header',
    teamLeads: [
      {
        name: 'Durga T',
        profile: d,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/durga-thiruvenkadathan-571797255',
      },
      {
        name: 'Hindu S',
        profile: h,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/hindu-s-288661257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      }
    ],
  },
  2: {
    description: 'Embark on a quest through books and beyond! Discover knowledge and ignite curiosity in this exciting literary challenge.',
    poster: dayPosters[2],
    // formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header',
    teamLeads: [
      {
        name: 'Devadharshini S',
        profile: dd,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/devadharshini-s-7b7522257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Cyril Benedict P S',
        profile: c,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/cyril-bendict-ps-697a58257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      }
    ],
  },
  3: {
    description: 'Wizarding Quest: Unraveling Tales and Trivia-Step into an enchanting world of stories and embark on a magical journey through the realms of literature. Share your thoughts, weave your imagination, and bring captivating characters to life. Dive into thrilling tales, unravel hidden mysteries, and explore the magic of words. Let your creativity shine as you express your ideas and shape unforgettable adventures. Join us in this exciting quest and let the power of storytelling ignite your imagination!',
    poster: dayPosters[3],
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header',
    teamLeads: [
      {
        name: 'Muthurama A',
        profile: mu,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/muthurama-a-307186249',
      },
      {
        name: 'Sathish Waran S ',
        profile: sw,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/sathish-waran-s-165661257',
      }
    ],
  },
  4: {
    description: 'Captivate the Richness of Cultures-Step onto the stage and embrace the beauty of diversity with every move you make. Let your commanding gaze captivate the audience, while your iconic walk leaves an indelible mark, setting the earth ablaze with your passion. Showcase your vibrant talents and bring your unique flair to the spotlight. Celebrate the richness of cultures and let your individuality shine. Unleash your charisma, own the stage, and make every moment unforgettable!',
    poster: dayPosters[4],
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header',
    teamLeads: [
      {
        name: 'Mahathi S V',
        profile: m,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/mahathi-s-v-a79337263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Harshavardhan M V',
        profile: harha,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/harshavardhan-m-venkataraman-64965b253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      }
    ],
  },
  5: {
    description: 'Welcome to Twistopia—a realm where puzzles meet purpose and imagination shapes destiny. Dive into challenges that inspire, create, and redefine who you are. Ready to unlock the brightest version of yourself? The journey begins here!',
    poster: dayPosters[5],
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header',
    teamLeads: [
      {
        name: 'Amrudha R',
        profile: ar,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/amrudha-rangarajan-5a593627a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Saranyaa P',
        profile: s,
        banner: b9,
        linkedin: 'www.linkedin.com/in/saranyaa-palaniappan-927b15258',
      }
    ],
  },
  6: {
    description: 'Join us for a unique storytelling event where participants will be given key hints to weave into a captivating narrative. Attendees will work together to piece these clues into a cohesive story, filled with twists, turns, and creative flair. Whether you are an experienced writer or just love a good story, this event promises an engaging and imaginative challenge. Let your creativity run wild and see where the hints take you in crafting a memorable tale. Do not miss out on this chance to share and hear some fantastic stories',
    poster: dayPosters[6],
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc89PIJqCdmbWCRVroevZB6aLdr25K0r6Agn4eF_vCSOGPvIA/viewform?usp=header',
    teamLeads: [
      {
        name: 'Pragadeshwaran K B',
        profile: p,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/pragadeshwaransprofile/',
      },
      {
        name: 'Reshma V',
        profile: r,
        banner: b9,
        linkedin: 'https://www.linkedin.com/in/reshma-v-072184259',
      }
    ],
  },
};

const TeamLeadSection = ({ teamLeads }) => {
  return (
    <div className="team-lead-grid">
      {teamLeads.map((lead, index) => (
        <div key={index} className="team-lead-card">
          <img src={lead.banner} alt={`Banner of ${lead.name}`} className="banner" />
          <img src={lead.profile} alt={`Profile of ${lead.name}`} className="profile" />
          <p>{lead.name}</p>
          <a href={lead.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
            LinkedIn
          </a>
        </div>
      ))}
    </div>
  );
};

const DayDetail = () => {
  const { dayId } = useParams();
  const currentDayDetails = dayDetails[dayId];

  if (!currentDayDetails) {
    return <div>Day not found</div>;
  }

  return (
    <div className="day-detail-container">
     <video 
  src={background} 
  autoPlay 
  loop 
  muted 
  playsInline 
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
          <h1>ITINERARY</h1>
          <p>{currentDayDetails.description}</p>
          {dayId !== "1" && dayId !== "2" ? (
            <a href={currentDayDetails.formUrl} target="_blank" rel="noopener noreferrer">
              <button className="register-button">Register</button>
            </a>
          ) : (
            <button className="register-button" disabled>Only for School Students</button>
          )}
{/*           <a href={currentDayDetails.formUrl} target="_blank" rel="noopener noreferrer">
            <button className="register-button">Register</button>
          </a> */}
        </div>
      </div>

      <div className="team-lead-section">
        <TeamLeadSection teamLeads={currentDayDetails.teamLeads} />
      </div>
    </div>
  );
};

export default DayDetail;
