import React, {useEffect} from 'react'
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import Exception from '../Exception/Exception';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Exception {...homeObjFive} />
            <Pricing />
            <HeroSection {...homeObjFour} />
    </>
    )
}

export default Home;
