import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import Logo from "../Footer.js/fidelleslogo2.svg";



function Footer() {
  return (
    <div className='footer-container'>
    
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contato</h2>
            <Link to='/sign-up'>Entre em contato</Link>
            <Link to='/services'>Pacotes</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>KAVYAR</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
          <img src={Logo} alt="logo"/>
          </div>
          <small className='website-rights'>BUILT BY HOD © 2023</small>
          <div className='social-icons'>
           
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            
            
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;