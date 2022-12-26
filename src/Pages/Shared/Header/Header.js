import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../../Context/AuthProvaider';

import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logOut, google } = useContext(Context)
    const from = location.state?.from?.pathname || "/";
    const googleHandler = () => {
        google()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })

            })
            .catch(console.error())
    }

    const logOutHandler = () => {
        logOut()
            .then(result => { })
            .catch(console.error())
    }

    return (
        <div>
            <div className="navbar bg-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link to={'/register'}>register</Link></li>
                            <li tabIndex={0}>
                                <Link to={'/login'}>                  <p className="justify-between ">
                                    login

                                </p></Link>

                            </li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                    <Link to={'/'}><p className="btn btn-ghost normal-case text-xl text-white">Aryan's Cake</p></Link>
                    <button onClick={googleHandler} className='btn btn-secondary'>google</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-white'><Link to={'/blog'}>Blog</Link></li>
                        <li className='text-white'><Link to={'/'}>Home</Link></li>
                        <li className='text-white'><Link to={'/allcakes'}>all cakes</Link></li>
                        <li><Link to={'/register'}><p className='text-white'>Register</p></Link></li>


                        {
                            user?.email ? <li><p onClick={logOutHandler} className='text-white'>Logout</p></li>
                                : <li tabIndex={0}>
                                    <Link to={'/login'}><p className='text-white'>Login</p></Link>
                                </li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <img style={{ width: '70px', height: '70px', borderRadius: '100px' }} src={user?.photoURL} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Header;
<div className="navbar-start">

</div>