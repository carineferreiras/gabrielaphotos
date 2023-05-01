import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import Images from './images';

function Cards() {
    return (
        <div className='cards'>
            <h1>GALLERY</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='DSC_0010.jpg'
                            text='photo '
                            
                            path='/services'
                        />
                        <CardItem
                            src='/images/DSC_0014.jpg'
                            text='photo'
                            
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='photo'
                        
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.jpg'
                            text='photo'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='photo'
                            
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
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
                            src='images/img-1.jpg'
                            text='Tratamentos Corporais'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Tratamentos Faciais'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                         
                            text='Tratamentos Faciais'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.jpg'
                            text='Vacinação'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Colocação de brincos em bebês'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
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