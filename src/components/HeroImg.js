import './HeroImgStyle.css';
import React from 'react';
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImage' />
        </div>
        <div className='content'>
            <p>My name is Mohammad Arwaz.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
        </div>
    </div>;
};

export default HeroImg;



