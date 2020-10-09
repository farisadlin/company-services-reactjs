import React, { useEffect } from 'react'
import HeroSection from '../../HeroSection';
import {homeObjFour} from './Data';

function Products() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <HeroSection {...homeObjFour} />
    </>
    )
}

export default Products;
