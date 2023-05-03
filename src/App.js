import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home.js';
import Services from './components/pages/Services/Services.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer.js';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' element={<Services/>} />
    
        <Route path='/sign-up' element={<Contact/>} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;