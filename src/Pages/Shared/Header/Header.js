import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../assets/5229f2509537b4e69cbf51bffc4db979.jpg'
const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-900">
                <div className="navbar-start">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="header menu menu-horizontal px-1">
                        <li><Link>Item</Link></li>
                        <li><Link>item</Link></li>
                        <li><Link>item</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;