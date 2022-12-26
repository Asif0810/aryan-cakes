import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewList from '../userReview/ReviewList';

const Details = () => {
    const [reviewlist, setreviewList] = useState([]);
    console.log(reviewlist)
    useEffect(() => {
        fetch('http://localhost:5000/reviewlist')
            .then(res => res.json())
            .then(data => setreviewList(data))
    }, [])
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
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <h2 className='text-center text-4xl'>your review</h2>
                    <thead>
                        
                    </thead>
                    <tbody>

                    </tbody>


                </table>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>

                    </thead>
                    <tbody>
                        <h2 className='text-center text-4xl'>Customer review</h2>
                        {
                            reviewlist.map(rev => <ReviewList key={rev._id} rev={rev}></ReviewList>)
                        }
                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Details;