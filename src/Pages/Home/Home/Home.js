import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Cakes from './cakes/Cakes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cakes></Cakes>
            <About></About>
        </div>
    );
};

export default Home;