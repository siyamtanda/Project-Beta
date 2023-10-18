import React from 'react';
import '../styles/Footer.css'; // You can create a separate CSS file for this component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="left">
          <h1>Have a project in mind? <br/>
            Let's make it happen</h1>
        </div>
        <div className="address">
          <address>
            22 Street Name, Surburb, 8000<br />
            Cape Town, South Africa<br />
            +27 21 431 0001<br />
            enquire@website.co.za
          </address>
        </div>
      </div>
      <div className="footer-links">
        <div className="column">
          <h6>Terms of service</h6>
          <h6>Private policy</h6>
          <h6>impressum</h6>
        </div>
        <div className="column">
          <h6>Facebook</h6>
          <h6>Instagram</h6>
          <h6>Twitter</h6>
        </div>
        <div className="column">
          <h6>Github</h6>
          <h6>Linkedin</h6>
          <h6>Teams</h6>
        </div>
        <div className="column">
          <h6>Youtube</h6>
          <h6>Behance</h6>
          <h6>Dribble</h6>
        </div>
        <div className="column">
          <h6>Explore Open Jobs</h6>
          <h6>@2000 - 2003 Company</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
