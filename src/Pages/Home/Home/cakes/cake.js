import React from 'react';

const Cake = ({ cake }) => {
    const { cake_name, description, img, _id } = cake
    return (
        <div className=''>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img style={{ height: "200px", width: "100%" }} src={img} alt="cakes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cake_name}!</h2>
                    <p>{description.slice(0, 100)}......</p>

                </div>
            </div>
        </div>
    );
};

export default Cake;