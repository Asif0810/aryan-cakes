import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../Context/AuthProvaider';

import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(Context)
    console.log(user?.email)
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
                                <Link to={'/login'}>                  <a className="justify-between ">
                                    login

                                </a></Link>

                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white">Aryan's Cake</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-white'><Link to={'/'}>Home</Link></li>
                        <li className='text-white'><Link to={'/allcakes'}>all cakes</Link></li>
                        <li><Link to={'/register'}><a className='text-white'>Register</a></Link></li>


                        {
                            user?.email ? <li><a onClick={logOutHandler} className='text-white'>Logout</a></li>
                                : <li tabIndex={0}>
                                    <Link to={'/login'}><a className='text-white'>Login</a></Link>
                                </li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className='text-white'>{user?.email}</p>
                    <a className="pl-8 pr-8 btn btn-secondary">Google</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
<div className="navbar-start">

</div>