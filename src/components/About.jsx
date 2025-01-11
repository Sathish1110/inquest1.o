import React from "react";
import './About.css'; // Make sure to import your CSS file

function About() {
    return (
        <div className="about-container">
            <div className="content">
                <h1>About Inquesta</h1>
                <br /><br />
                <p>
                National Library Week is an annual celebration which encourages people to read, teach young children that books are exciting, and provide an interminable source of information. The event aimed to encourage young minds to embrace curiosity, explore the wonders of science, and see themselves as engineers. This fosters respect for diverse viewpoints and builds a sense of community. 
                By participating in our events, people gain a sense of belonging and the 
                opportunity to contribute meaningfully. This can boost their self-confidence 
                and give them a platform to be recognized for their talents and contributions. 
                Now let's step into the extraordinary world of INQUESTA—NATIONAL LIBRARY WEEK celebration of 2k24, where creativity, innovation, and history collide in electrifying events! 
                Choose your adventure wisely, as participants can dive into one event of their choice, guaranteeing an unforgettable experience!
                </p>
            </div>
            <div className="logo">
                <img src="/path/to/your/logo.png" alt="Logo" /> {/* Update the path to your logo */}
            </div>
        </div>
    );
}

export default About;
