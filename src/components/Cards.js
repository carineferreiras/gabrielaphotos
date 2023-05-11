import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
//  import Logo from '../components/images/DSC_0010.jpg';





function Cards() {

    const [image, setImage] = useState(null);
    
    
    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          Authorization: 'NzHpSxfkoPxlz3VIeOCf2SnbyLdpf4NWk1bbS7fcKCs8KMLVqXQ4ENXs'
        }
      };
  
      fetch("https://api.pexels.com/v1/search?query=nature&per_page=1", options)
        .then(response => response.json())
        .then(data => {
          if (data.photos && data.photos.length > 0) {
            setImage(data.photos[0].src.large);
          }
        });
    }, []);




    return (
        <div className='cards'>
            <h1>GALLERY</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    {/*     */}
                </div>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    {/* <ul className='cards__items'> */}
                    {image && (
            <CardItem
              src={image}
              text='Delicious food'
              label='Food'
              path='/services'
            />
          )}
           {image && (
            <CardItem
              src={image}
              text='Delicious food'
              label='Food'
              path='/services'
            />
          )}
           {image && (
            <CardItem
              src={image}
              text='Delicious food'
              label='Food'
              path='/services'
            />
          )}
                        {/* <CardItem
                            src={image}
                            text='Tratamentos Corporais'
                            label='Adventure'
                            path='/services'
                        /> */}
                        {/* <CardItem
                            src={image}
                            text='Tratamentos Faciais'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                         src={image}
                            text='Tratamentos Faciais'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={image}
                            text='Vacinação'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={image}
                            text='Colocação de brincos em bebês'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={image}
                            text='Medicina Integrativa'
                            label='Adrenaline'
                            path='/sign-up'
                        /> */}
                    {/* </ul> */}
                </div>
            </div>
        </div>
    );
}

export default Cards;