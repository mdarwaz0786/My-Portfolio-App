import './FooterStyle.css';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <p><FaHome size={20} style=
                            {{ color: '#fff', marginRight: '2rem' }} />
                            Samastipur, Bihar, India
                        </p>
                    </div>
                    <div className='phone'>
                        <p><FaPhone size={20} style=
                            {{ color: '#fff', marginRight: '2rem' }} />+91-8340723693</p>
                    </div>
                    <div className='email'>
                        <p><FaMailBulk size={20} style=
                            {{ color: '#fff', marginRight: '2rem' }} />mohammadarwaz2024@gmail.com</p>
                    </div>
                </div>

                <div className='right'>
                    <p style={{ fontSize: "1.8rem" }}>About me :</p>
                    <p>My name is Mohammad Arwaz. I am a Full Stack Developer. I enjoy discussing new projects and develop challanges.</p>
                    <div className='social'>
                        <Link to="https://www.facebook.com/" target="_blank" className='socialLink'>
                            <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem', cursor: "pointer" }} />
                        </Link>
                        <Link to="https://twitter.com/" target="_blank" className='socialLink'>
                            <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem', cursor: "pointer" }} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/mdarwaz0786/" target="_blank" className='socialLink'>
                            <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem', cursor: "pointer" }} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
