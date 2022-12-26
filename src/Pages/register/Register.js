import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Context } from '../../Context/AuthProvaider';

const Register = () => {
    const navigate = useNavigate()
    const { regsiter, updateprofile } = useContext(Context)
    const [error, seterror] = useState('')
    const registerHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            seterror('please provide two uppaer case')
            return;
        }
        if (password.length < 6) {
            seterror('please provide 6 character')
            return;
        }
        regsiter(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                console.log(user)
                userUpdate(name, photo)
                navigate('/')

            })
            .catch(error => {
                const errorMessage = error.message;
                seterror(errorMessage)
            })
        const userUpdate = (name, photo) => {
            const profile = {
                displayName: name,
                photoURL: photo
            }
            updateprofile(profile)
                .then(() => { })
                .catch(error => {
                    console.log(error)
                })
        }


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={registerHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" name='username' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input required type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                                <Link to={'/login'}><small className='text-green-800'>already register?</small></Link>
                            </div>

                            <div className="form-control mt-6">
                                <p className='text-red-800'>{error}</p>
                                <button className="btn btn-secondary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register; 