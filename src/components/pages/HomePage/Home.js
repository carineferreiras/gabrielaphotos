import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
import Pricing from '../../Pricing';
import Cards from '../../Cards';


function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Pricing />
      <Cards/>
      
      
    </>
  );
}

export default Home;