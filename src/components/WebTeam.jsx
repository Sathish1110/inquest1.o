import React, { useEffect } from 'react'; // import useEffect
import './WebTeam.css'; 
import sathish from '../assets/sathish.jpg';
import b1 from '../assets/b1.jpg';
import b3 from '../assets/b3.jpg';
import b2 from '../assets/b2.jpg';
import selva from '../assets/selva.jpg';
import b4 from '../assets/b4.jpg';
import b5 from '../assets/b5.jpg';
import b6 from '../assets/b6.jpg';
import background from '../assets/webteamback.mp4';
import Footer from './Footer';
import guru from '../assets/guru.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import subashree from '../assets/subashree.jpg' 
import kamali from '../assets/kamali.jpg'
import jayashree from '../assets/jayashree.jpg'
import saranya from '../assets/saranya.jpg'
import rishi from '../assets/rishi.jpg'
import mohamed from '../assets/mohamed.jpg'

const webDevelopers = [
  {
    name: "SATHISH WARAN S",
    bannerImg: b1, 
    profileImg: sathish, 
    linkedin: "https://www.linkedin.com/in/sathish-waran-s-165661257"
  },
  {
    name: "SELVAMANIKANDAN S",
    bannerImg: b3, 
    profileImg: selva, 
    linkedin: "https://www.linkedin.com/in/selvamanikandan-s-8792b3250"
  },
  {
    name: "ASWIN A",
    bannerImg: b4, 
    profileImg: "https://example.com/profile-bob.jpg", 
    linkedin: "https://www.linkedin.com/in/a-aswin/"
  },
  {
    name: "GURUNATH",
    bannerImg: b2, 
    profileImg: guru,
    linkedin: "https://www.linkedin.com/in/gurunath-m-24441427b"
  },
  {
    name: "SHUBAASHREE SURESHBABU",
    bannerImg: b6, 
    profileImg: subashree, 
    linkedin: "https://www.linkedin.com/in/shubaashreesureshbabu"
  },
  {
    name: "Kamali",
    bannerImg: b5, 
    profileImg: kamali, 
    linkedin: "https://www.linkedin.com/in/bob-smith"
  }
];

const mediateam = [
  {
    name: "Rishi kumar S S",
    bannerImg: b1, 
    profileImg: rishi, 
    linkedin: "https://www.linkedin.com/in/rishi-kumar-16a3b5276"
  },
  {
    name: "Saranya P",
    bannerImg: b3, 
    profileImg: saranya, 
    linkedin: "https://www.linkedin.com/in/saranyaa-palaniappan-927b15258/"
  },
  {
    name: "⁠Jayashree",
    bannerImg: b4, 
    profileImg: jayashree, 
    linkedin: "https://www.linkedin.com/in/jayashree-t-103518257/"
  },
  {
    name: "MOHAMED SHAFEEQ S S",
    bannerImg: b4, 
    profileImg: mohamed, 
    linkedin: "https://www.linkedin.com/in/mohamed-shafeeq-0770a9258"
  },
];

const MemberCard = ({ bannerImg, profileImg, name, linkedin }) => (
  <div className="member" data-aos="fade-up" data-aos-duration="1500">
    <img src={bannerImg} alt={`${name} banner`} className="banner" />
    <img src={profileImg} alt={`${name} profile`} className="profile" />
    <h3>{name}</h3>
    <button className='b'><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
  </div>
);

const WebTeam = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component is mounted
  }, []);

  return (
    <div className='web-team'>
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
      <h1>WEB TEAM</h1>
      <center>
        <div className="team">
          {webDevelopers.map((developer, index) => (
            <MemberCard
              key={index}
              bannerImg={developer.bannerImg}
              profileImg={developer.profileImg}
              name={developer.name}
              linkedin={developer.linkedin}
            />
          ))}
        </div>
      </center>


      <h1>MEDIA TEAM</h1>
      <center>
        <div className="team">
          {mediateam.map((developer, index) => (
            <MemberCard
              key={index}
              bannerImg={developer.bannerImg}
              profileImg={developer.profileImg}
              name={developer.name}
              linkedin={developer.linkedin}
            />
          ))}
        </div>
      </center>

      <Footer />
    </div>
  );
};

export default WebTeam;
