import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg';


const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="Logo" />

            <div className='Contact-details'>
                <h3 style={{ color: "aqua" }}>Connect with us</h3>
             
                <div className='mail'>
                    <p>ndli@gmail.com</p>
                </div>
                <h3 style={{ color: "aqua" }}>Contact us</h3>
        
                <div className='names'>
                    <p>Praveen - +91 72004 29405</p>
                    <p>Vishwa - +91 96005 10732</p>
                </div>
            </div>

            <div className='locate-us'>
                <h2>Locate us</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1944.0891908174408!2d80.05403233854136!3d12.960434710720993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssairam%20Engineering%20college%20west%20tambaram%20!5e0!3m2!1sen!2sin!4v1729349108777!5m2!1sen!2sin"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sairam Engineering College Location"
                ></iframe>
            </div>
        </div>
    );
}

export default Footer;
