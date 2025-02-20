import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <>
            <section className="hero-section">
                <div className="hero-left"></div>
                <div className="hero-text-container">
                    <h1 className="hero-text">
                        Welcome to <span className="highlight">MyStore</span><br />Your Shopping <br />Destination
                    </h1>
                    <p className="hero-subtext">
                        Discover a wide range of products tailored just for you. Shop with ease and find exactly what you need.
                    </p>
                </div>
                <div className="hero-right"></div>
            </section>

            <section className="vertical-section">
                <div className="vertical-content">
                    <h2 className="vertical-heading">Discover Your Next Favourite Item</h2>
                    <p className="vertical-subtext">
                        Browse our exclusive collection and find the perfect product tailored just for you.
                    </p>
                    <div className="button-group">
                        <button className="shop-now-btn">Shop</button>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
