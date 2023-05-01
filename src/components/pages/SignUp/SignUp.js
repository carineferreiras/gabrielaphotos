import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne} from './Data';
import Pricing from '../../Pricing';
import Contact from '../../Contact';

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      
      <Pricing/>
      <Contact/>
    </>
  );
}

export default SignUp;