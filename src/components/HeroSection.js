
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'> 
            <h1>FIDE||ES</h1>
            <p>Photographer</p>
            
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