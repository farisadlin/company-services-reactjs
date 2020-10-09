import React, { useEffect } from 'react'
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import {homeObjOne} from './Data';

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjOne} />
    </>
    )
}

export default Services;
