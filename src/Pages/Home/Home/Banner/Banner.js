import React from 'react';
import './Banner.css'
import banner1 from "../../../../assets/front-view-sweet-chocolate-cake.jpg"
const Banner = () => {
    return (
        <div className='relative'>
            <div className="carousel h-4/5 w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner1} className="w-full" />
                </div>
            </div>
            <div className='bannerheade absolute w-5/12 top-0 text-6xl'>
                <h1>SPECIAL CAKES FOR  SPECIAL OCCASIONS</h1>
            </div>
        </div>
    );
};

export default Banner; <h2>Banner</h2>