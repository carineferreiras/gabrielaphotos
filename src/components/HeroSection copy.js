
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Logo from "../components/images/fidelleslogo5.svg"

function HeroSection() {
    return (
        <div className='hero-container'> 
            {/* <h1>FIDE||ES</h1>
            <p>Photographer</p> */}
            <img src={Logo} alt="logo"/>
            
          <div className='hero-container2'>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    SAIBA MAIS
                </Button>
                
            </div>
        </div>
        </div>
    );
}

export default HeroSection;