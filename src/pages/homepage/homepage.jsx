import React from 'react';
import SimpleSlider from '../../components/bannerCarousel/bannerCarousel';
import Banners from '../../components/banners/banners';

const Homepage = () => {
    return (
        <div className='homepage'>
            <SimpleSlider />
            <Banners />
        </div>
    )
}

export default Homepage;
