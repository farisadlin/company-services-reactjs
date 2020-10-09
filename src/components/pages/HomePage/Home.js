import React, {useEffect} from 'react'
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
    </>
    )
}

export default Home;
