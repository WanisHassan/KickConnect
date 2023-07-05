import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import promotest from './promotest.jpg';
import jordan4promo from './jordan4promo.webp';
import jordanbrand from './jordanbrand.webp';
import nikebrand from './nikebrand.webp';
import adidasbrand from './adidasbrand.webp';
import newbalancebrand from './newbalancebrand.webp';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-brand"><Link to="/" className="brand-link">KickConnect</Link></div>
        <ul className="nav-links">
          <li className="nav-link"><Link to="/browse">Browse</Link></li>
          <li className="nav-link"><a href="#">Sell</a></li>
          <li className="nav-link"><Link to='/aboutus'>About Us</Link></li>
          <li className="nav-link nav-button-contrast"><Link to="/login">Login</Link></li>
          <li className="nav-link nav-button-contrast"><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={promotest} alt="Image 1" className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={jordan4promo} alt="Image 2" className="carousel-image" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="section-header">
          <h2 className="section-title">Popular Brands</h2>
      </div>
      <div className="image-container">
  <div>
    <img src={jordanbrand} alt="Image 1" className="small-image" />
    <div className="image-title">Air Jordan</div>
  </div>
  <div>
    <img src={nikebrand} alt="Image 2" className="small-image" />
    <div className="image-title">Nike</div>
  </div>
  <div>
    <img src={adidasbrand} alt="Image 3" className="small-image" />
    <div className="image-title">Adidas</div>
  </div>
  <div>
    <img src={newbalancebrand} alt="Image 4" className="small-image" />
    <div className="image-title">New Balance</div>
  </div>
</div>
      <nav className="footer">
          <div className="footer-section">
          <h4 className="footer-title">Find Our Socials</h4>
          <ul className="footer-socials">
          <li className="footer-social">Social 1</li>
          <li className="footer-social">Social 2</li>
          </ul>
      </div>
      </nav>
    </div>
  );
}

export default Home;