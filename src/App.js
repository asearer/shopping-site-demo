// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <header>
          <div className="header-content">
            <h1 className="logo">E-commerce App Demo</h1>
            <Navbar /> {/* Include Navbar component */}
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2024 E-commerce App Demo. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
