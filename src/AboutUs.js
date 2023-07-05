import React from 'react';
import { Link } from 'react-router-dom';


function AboutUs() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">KickConnect</Link>
        </div>
        <ul className="nav-links">
          <li className="nav-link"><Link to="/browse">Browse</Link></li>
          <li className="nav-link"><a href="#">Sell</a></li>
          <li className="nav-link"><Link to='/aboutus'>About Us</Link></li>
          <li className="nav-link nav-button-contrast"><Link to="/login">Login</Link></li>
          <li className="nav-link nav-button-contrast"><a href="#">Sign Up</a></li>
        </ul>
      </nav>
     
      <section className="programs-section">
        <div className="container">
          <h1>About Us</h1>
          
            <div className="section-text">
              <h2>How We Work</h2>
              <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
              </p>
            </div>

            <div className="section-text">
              <h2>Buying Guide</h2>
              <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
              </p>
            </div>

            <div className="section-text">
              <h2>Selling Guide</h2>
              <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
              </p>

            <div className="section-text">
              <h2>KickConnect</h2>
              <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
              </p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;