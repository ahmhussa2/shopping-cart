import React from "react";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo  from '../../logo.png';
import SignInandSignUp from "../signinandsignup/signinandsignup";
import Cart from '../cart/cart';

const Header = () => (
    <div className="header container">
        <Link to='/' className='header__logoContainer'>
            <LazyLoadImage src={Logo} alt="Sabka bazar" />
        </Link>
        <div className='header__options'>
            <Link className='header__optionsLink' to='/'>
                Home
            </Link>
            <Link className='header__optionsLink' to='/products'>
                Products
            </Link>
        </div>
        <div className='header__cartWrapper'>
            <SignInandSignUp />
            <Cart />
        </div>
    </div>
);

export default Header;