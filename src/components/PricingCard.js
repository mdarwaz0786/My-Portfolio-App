import './PricingCardStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = () => {
    return <div className='pricing'>
        <h1 style={{ display: "flex", justifyContent: "center", marginBottom: "2rem", marginTop: "2rem" }}>My Services</h1>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basics -</h3>
                <span className='bar'></span>
                <p className='btc'>$100</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured-</p>
                <p>- Responsive -</p>
                <p>- Web Development -</p>
                <p>- Mobile Development -</p>
                <Link to='/contact' className='btn'>PURCHASE NOW</Link>
            </div>
            <div className='card'>
                <h3>- Premium -</h3>
                <span className='bar'></span>
                <p className='btc'>$200</p>
                <p>- 5 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Featured-</p>
                <p>- Responsive -</p>
                <p>- Web Development -</p>
                <p>- Mobile Development -</p>
                <Link to='/contact' className='btn'>PURCHASE NOW</Link>
            </div>
            <div className='card'>
                <h3>- Business -</h3>
                <span className='bar'></span>
                <p className='btc'>$300</p>
                <p>- 7 Days -</p>
                <p>- 7 Pages -</p>
                <p>- Featured-</p>
                <p>- Responsive -</p>
                <p>- Web Development -</p>
                <p>- Mobile Development -</p>
                <Link to='/contact' className='btn'>PURCHASE NOW</Link>
            </div>
        </div>
    </div>
};

export default PricingCard;
