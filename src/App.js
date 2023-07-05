import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Browse from './Browse';
import Login from './Login';
import AboutUs from './AboutUs';
import SignUp from './SignUp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/kickconnect" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
