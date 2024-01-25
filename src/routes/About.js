import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import HeroImg2 from '../components/HeroImg2.js';
import AboutContent from '../components/AboutContent.js';
import PricingCard from '../components/PricingCard.js';

const About = () => {
    return <div>
        <Navbar />
        <HeroImg2 heading='About:' text='I am a Full Stack Developer.' />
        <AboutContent />
        <PricingCard />
        <Footer />
    </div>
};

export default About;
