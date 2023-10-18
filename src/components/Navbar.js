import React from 'react';
import '../styles/Navbar.css'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="navbar-links">
        <a href="#services">Services</a>
        <a href="#industries">Industries</a>
        <a href="#cases">Cases</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-button">
        <button className="letstalk-button">Let's Talk</button>
      </div>
    </nav>
  );
};

export default Navbar;
