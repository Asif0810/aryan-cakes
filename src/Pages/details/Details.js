import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const { img, cake_name, description, price, _id } = useLoaderData();
    console.log(cake_name)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold mb-7">{cake_name} !</h1>
                        <b className='mt-6'>price: {price}$</b>
                        <p className="py-6">{description}</p>
                        <Link to={`/review/${_id}`}><button className="btn btn-wide btn-secondary">review</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;