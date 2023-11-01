import './FooterStyle.css';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <p><FaHome size={20} style=
                            {{ color: '#fff', marginRight: '2rem' }} />
                            Ward no. 10, Jitwarpur Kumhira, Samastipur, Bihar.
                        </p>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style=
                            {{ color: '#fff', marginRight: '2rem' }} />+91-8340723693</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style=
                            {{ color: '#fff', marginRight: '2rem' }} />mdarwaznew2017@gmail.com</h4>
                    </div>
                </div>

                <div className='right'>
                    <h4>About me :</h4>
                    <p>My name is Mohammad Arwaz. I am a React Front-End Developer. I enjoy discussing new projects and develop challanges.</p>
                    <div className='social'>
                        <FaFacebook size={30} style=
                            {{ color: '#fff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style=
                            {{ color: '#fff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style=
                            {{ color: '#fff', marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
