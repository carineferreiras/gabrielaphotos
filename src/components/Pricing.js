import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pacotes</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>1 Hour Outdoor Shoot</h3>
                <h4>$100</h4>
                <p>1 Hour of photography in a style of your choice</p>
                <ul className='pricing__container-features'>
                  <li>110 Professionally Processed Image</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Escolha esse
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>2 Hour Outdoor Shoot</h3>
                <h4>$150</h4>
                <p>2 Hours of photography in a style of your choice</p>
                <ul className='pricing__container-features'>
                  <li>20 Professionally Processed Images</li>
                 
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                   Escolha esse
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Custom Shoot</h3>
                <h4>Negotiable</h4>
                
                <ul className='pricing__container-features'>
                  <li>Do the other options not fit your vision? Reach out for a competitive quote!</li>
                  
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                    Escolha esse
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;