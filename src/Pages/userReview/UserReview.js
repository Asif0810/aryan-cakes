import React, { useState } from 'react';

const UserReview = () => {
    const [rating, setrating] = useState(0);

    const reviewHandler = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.username.value;
        const description = form.description.value;
        const userRating = rating;
        console.log(name, description, userRating)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Review and Rating ***</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={reviewHandler} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='username' placeholder="write your name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                                <select onChange={event => setrating(event.target.value)}>
                                    <option value="1">*</option>
                                    <option value="2">**</option>
                                    <option value="3">***</option>
                                    <option value="4">****</option>
                                    <option selected value="5">*****</option>
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