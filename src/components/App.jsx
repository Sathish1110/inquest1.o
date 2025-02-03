import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Event from './Event';
import WebTeam from './WebTeam';
import About from './About';
import ContactUs from './ContactUs';
import DayDetail from './DayDetail';
import Footer from './Footer';
import inquesta from '../assets/8.png';
import background1 from '../assets/background1.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home({ aboutRef, contactRef }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const eventDate = new Date("2025-02-13T00:00:00").getTime(); // Updated event date

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      if (timeLeft > 0) {
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ message: "Event has started!" });
        clearInterval(interval);
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <video
        src={background1}
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      />

      <div className='content'>
        <div style={{ marginBottom: '30px' }}>
        <h1 data-aos="zoom-in" data-aos-duration="1800">
            SRI SAIRAM ENGINEERING COLLEGE
        </h1>
        <h2 data-aos="flip-up" data-aos-duration="1200" data-aos-delay="1000">&</h2>
        <h1 data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="1500">
           NDLI CLUB
        </h1>
        </div>

        <h2 style={{ marginBottom: '25px' }} data-aos="flip-down" data-aos-duration="1500" data-aos-delay="2200">
          Presents
        </h2>

        <div style={{ marginBottom: '30px' }} data-aos="zoom-out" data-aos-duration="1800" data-aos-delay="2700">
          <img src={inquesta} alt="Main Logo" className="main-logo" />
        </div>

        <div className="timer">
          {timeLeft.message ? (
            <p>{timeLeft.message}</p>
          ) : (
            <p>
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const App = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <Router>
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        &#9776;
      </div>

      {isMenuOpen && (
        <nav className="menu">
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/event" onClick={() => setIsMenuOpen(false)}>Event</Link></li>
            <li><Link to="#" onClick={handleScrollToContact}>Contact Us</Link></li>
            <li><Link to="/tech-team" onClick={() => setIsMenuOpen(false)}>Technical team</Link></li>
            <li><Link to="#" onClick={handleScrollToAbout}>About</Link></li>
          </ul>
        </nav>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home aboutRef={aboutRef} contactRef={contactRef} />
              <div ref={aboutRef}><About /></div>
              <div ref={contactRef}><ContactUs /></div>
              <Footer /> 
            </>
          }
        />
        <Route path="/event" element={<Event />} />
        <Route path="/tech-team" element={<WebTeam />} />
        <Route path="/event/day/:dayId" element={<DayDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
