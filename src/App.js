import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home.js';
import Services from './components/pages/Services/Services.js';
import SignUp from './components/pages/SignUp/SignUp.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' element={<Services/>} />
    
        <Route path='/sign-up' element={<SignUp/>} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;