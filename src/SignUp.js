import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    navigate('/');
  };

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
      <section className="booking-section">
        <div className="container">
          <h1></h1>
          <div className="booking-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;