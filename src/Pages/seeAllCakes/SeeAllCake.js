import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Seeall from './Seeall';

const SeeAllCake = () => {
    const allcakes = useLoaderData()
    return (
        <div>
            <h2 className='text-6xl text-center mt-20 font-bold'>All cakes are available </h2>
            <div className='grid grid-cols-3 gap-12 mt-10 mb-14'>
                {
                    allcakes.map(cake => <Seeall key={cake._id} cake={cake}></Seeall>)
                }
            </div>
        </div>
    );
};

export default SeeAllCake;