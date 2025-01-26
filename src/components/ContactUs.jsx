import React, { useEffect } from 'react';
import './ContactUs.css'; 
import vishwa from '../assets/vishwa.jpg'
import praveen from '../assets/praveen.jpg'
import mahati from '../assets/mahati.jpg'
import sivagami from '../assets/sivagamimam.jpg'
import th from '../assets/th.jpg'
import b1 from '../assets/b1.jpg'
import roshini from '../assets/roshini.png'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import b6 from '../assets/b6.jpg'
import b7 from '../assets/b7.jpg'
import b8 from '../assets/b8.jpg'
import b9 from '../assets/b9.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const staffCoordinators = [
  {
    name: "Dr.N.Sivakami",
    photo: sivagami, 
    linkedin: "https://www.linkedin.com/in/sivakami-nagappan-6794a71ab",
    banner: b9
  },
  {
    name: "Tharinni Mai T N M",
    photo: th, 
    linkedin: "https://www.linkedin.com/in/tharinni-mai-t-n-m-2327b8146?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    banner: b9
  },
];

const studentCoordinators = [
  {
    name: "Vishwa",
    photo: vishwa,
    linkedin: "https://www.linkedin.com/in/vishwa-m-494866333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    banner: b6
   
  },
  {
    name: "Roshini",
    photo: roshini, // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/roshini-r-a9a983258/",
    banner: b3
  },
  {
    name: "Praveen",
    photo: praveen, // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/praveen-thukaram-9219a4255",
    banner: b1
  },
  {
    name: "Mahathi",
    photo:  mahati, // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/mahathi-s-v-a79337263",
    banner: b8
  },
];

const ContactUs = () => {
  useEffect(() => {
  AOS.init(); 
  }, []);
  return (
    <div className="contact-container">
      

      <h2>Staff Coordinator</h2>
      <br /><br />

      <center>
      <div className="coordinator-grid">
        {staffCoordinators.map((coordinator, index) => (
          <div className="coordinator-card" key={index} data-aos="flip-up" data-aos-duration="1700">
            <img src={coordinator.photo} alt={coordinator.name} className='profile'/>
            <img src={coordinator.banner} alt="" className='banner'/>
            <a href={coordinator.linkedin} target="_blank" rel="noopener noreferrer">
              <p>{coordinator.name}</p>
            </a>
          </div>
        ))}
      </div>
      </center>

      <br /><br />

      <h2>Student Coordinators</h2>
      <br /><br />

      <center>
      <div className="coordinator-grid">
        {studentCoordinators.map((coordinator, index) => (
          <div className="coordinator-card" key={index} data-aos="flip-up" data-aos-duration="1800">
            <img src={coordinator.photo} alt={coordinator.name} className='profile'/>
            
            <img src={coordinator.banner} alt="" className='banner'/>
           
            <a href={coordinator.linkedin} target="_blank" rel="noopener noreferrer">
              <p>{coordinator.name}</p>
            </a>
          </div>
        ))}
      </div>
      </center>
    </div>
  );
};

export default ContactUs;
