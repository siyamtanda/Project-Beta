import React from 'react';
import "../styles/HeroSection.css";
import jose from '../assets/jose.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="text-container">
        <h1>Live with Confidence</h1>
        <h3>Jose Mourinho brings confidence to pan-African Sanlam campaign.</h3>
        <button>View Project</button>
      </div>
      <img src={jose} alt="Hero Image" className="hero-image" /> 
    </div>
  );
};

export default HeroSection;
