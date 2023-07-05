import React from 'react';
import { Link } from 'react-router-dom';
import FilteredSearch from './FilteredSearch';
import './Browse.css';
import jordanbrand from './jordanbrand.webp';
import nikebrand from './nikebrand.webp';
import adidasbrand from './adidasbrand.webp';
import newbalancebrand from './newbalancebrand.webp';

function Browse() {
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
          <li className="nav-link nav-button-contrast"><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
      <div className="content">
        <div className="sidebar">
          <h2>Brands</h2>
          <FilteredSearch />
          <h2>Sizes</h2>
          <FilteredSearch />
          <h2>Prices</h2>
          <FilteredSearch />
        </div>
        <div className="image-section">
          <div className="filtered-search-images">
            <img src={jordanbrand} alt="Jordan Brand" className="small-image" />
            <img src={nikebrand} alt="Nike Brand" className="small-image" />
            <img src={adidasbrand} alt="Adidas Brand" className="small-image" />
            <img src={newbalancebrand} alt="New Balance Brand" className="small-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;


