import React, { useEffect } from 'react'
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import {homeObjThree} from './Data';

function SignUp() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <HeroSection {...homeObjThree} />
    </>
    )
}

export default SignUp;
