import './AboutContentStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';
import mernImage from '../assets/mernImage.png';


const AboutContent = () => {
    return <div className='about'>
        <div className='left'>
            <h1>Who Am I ?</h1>
            <p>I am a Full Stack Developer. I build responsive, user-friendly, and secure websites for my clients.</p>
            <Link to='/contact' className='btn'>CONTACT</Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack bottom'>
                    <img className='img' src={mernImage} alt='mernImage' />
                </div>
            </div>
        </div>
    </div>
};

export default AboutContent;
