import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
 import Logo from '../components/images/DSC_0010.jpg';
 import Logo2 from '../components/images/DSC_0014.jpg';
 import Logo3 from '../components/images/DSC_0023.jpg' ;
 import Logo4 from '../components/images/DSC_0028.jpg';
 import Logo5 from '../components/images/DSC_0091.jpg';
 import Logo6 from '../components/images/DSC_0105.jpg';
 import Logo7 from '../components/images/DSC_0153.jpg';
 import Logo8 from '../components/images/DSC_0154.jpg';
 import Logo9 from '../components/images/DSC_0605.jpg';
 import Logo10 from '../components/images/DSC_0606.jpg';
 import Logo11 from '../components/images/DSC_0612.jpg';
 import Logo12 from '../components/images/DSC_0613.jpg';




function Cards() {
    return (
        <div className='cards'>
            <h1>GALLERY</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                           src={Logo} 
                        />
                        <CardItem
                            src={Logo2} 
                            text='photo'
                            
                            path='/services'
                        />
                        <CardItem
                            src={Logo3} 
                            text='photo'
                        
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                           src={Logo4} 
                            text='photo'
                            path='/services'
                        />
                        <CardItem
                            src={Logo5} 
                            text='photo'
                            
                            path='/services'
                        />
                        <CardItem
                            src={Logo6} 
                            text='photo'
                            
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={Logo7} 
                            text='Tratamentos Corporais'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={Logo8} 
                            text='Tratamentos Faciais'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                         src={Logo9} 
                            text='Tratamentos Faciais'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={Logo10} 
                            text='Vacinação'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={Logo11} 
                            text='Colocação de brincos em bebês'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={Logo12} 
                            text='Medicina Integrativa'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;