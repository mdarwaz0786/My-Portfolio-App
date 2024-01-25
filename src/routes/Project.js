import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import HeroImg2 from '../components/HeroImg2.js';
import Work from '../components/Work.js';

const Project = () => {
  return <div>
    <Navbar />
    <HeroImg2 heading='Projects:' text='some of my most recent works.' />
    <Work />
    <Footer />
  </div>
};

export default Project;
