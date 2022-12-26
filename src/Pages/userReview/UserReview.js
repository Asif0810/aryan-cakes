import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/AuthProvaider';

const UserReview = () => {
    const navigate = useNavigate()
    const { img, cake_name, _id } = useLoaderData();
    console.log(img, cake_name)
    const [rating, setrating] = useState(0);
    const { user } = useContext(Context)
    const reviewHandler = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.username.value;
        const description = form.description.value;
        const image = form.imageURL.value;
        const userAddress = form.address.value
        console.log(name, description,)
        const reviewInfo = {
            userName: name,
            description: description,
            rating: rating,
            user_image: image || user.photoURL,
            cakeName: cake_name,
            address: userAddress

        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('review succesfully')
                }
                form.reset()
                console.log(data)
                navigate(`/details/${_id}`)
            }).catch(console.error())
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    img
                    <h1 className="text-5xl font-bold">Review and Rating ***</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={reviewHandler} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input required type="text" name='username' placeholder="write your name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">image URL</span>
                            </label>
                            <input  type="text" name='imageURL' placeholder="image" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input required type="text" name='address' placeholder="address" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                                <select onChange={event => setrating(event.target.value)}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option selected value="5">5</option>
                                </select>
                            </label>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">description</span>
                            </label>
                            <textarea name='description' className="textarea textarea-primary" placeholder="write"></textarea>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserReview;