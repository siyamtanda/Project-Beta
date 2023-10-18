import React from 'react';
import "../styles/Section2.css"; // You can create a separate CSS file for this component
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

const Section2 = () => {
  return (
    <div className="section2">
      <h2>We offer a complete range of bespoke design and <br/>
          development services to help you turn your ideas into <br/>
          digital masterpieces.</h2>
       
      <div className="icon-container">
        <div className="icon">
          <img src={icon1} alt="Icon 1" />
          <h6>Web Developer</h6>
          <p>We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.
          </p>
        </div>
        <div className="icon">
          <img src={icon2} alt="Icon 2" />
          <h6>User experience <br/>
            & design</h6>
          <p>Our complete web design services will bring your ideas to life and provide you with a sleek, high perfoming product that elevates your business.</p>
        </div>
        <div className="icon">
          <img src={icon3} alt="Icon 3" />
          <h6>Mobile app development</h6>
          <p>Our extensive mobile develoment experience allows us to create custom native and cross platform iOS and android mobile solutions for our clients .</p>
        </div>
        <div className="icon">
          <img src={icon4} alt="Icon 4" />
          <h6>Blockchain Solutions</h6>
          <p>We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
