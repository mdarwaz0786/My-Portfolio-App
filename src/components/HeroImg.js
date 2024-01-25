import './HeroImgStyle.css';
import React from 'react';
import IntroImg from '../assets/intro-bg.png';
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImage' />
        </div>
        <div className='content'>
            <p style={{ fontWeight: "600" }}>My name is Mohammad Arwaz.</p>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
        </div>
    </div>
};

export default HeroImg;



