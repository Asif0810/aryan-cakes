import React from 'react';
import { Link } from 'react-router-dom';

const Seeall = ({ cake }) => {
    const { cake_name, description, price, img, _id } = cake
    console.log(cake)
    return (
        <div>
            <div className=''>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure><img style={{ height: "200px", width: "100%" }} src={img} alt="cakes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{cake_name}!</h2>
                        <b>price: {price}$</b>
                        <p>{description.slice(0, 100)}...... <small className='text-indigo-700'><Link to={'/details'}>details</Link></small> </p>
                        <button className="btn btn-secondary w-32 ml-24">details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seeall;