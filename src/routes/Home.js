import React from 'react';
import Navbar from '../components/Navbar.js';
import HeroImg from '../components/HeroImg.js';
import Work from '../components/Work.js';
import Footer from '../components/Footer.js';


const Home = () => {
    return <div>
        <Navbar />
        <HeroImg />
        <Work />
        <Footer />
    </div>;
};

export default Home;
