import React from 'react';
import App from '../App';
import '../css/App.css';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

const Menu = () => {


    return (
        <div className='MenuLinks'>
            <Link to='/complete'><MenuItem name='Просмотрено' /></Link>
            <Link to='/wishlist'><MenuItem name='В планах' /></Link>         
        </div>
    )
}

export default Menu;