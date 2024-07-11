import React from 'react';
import { Link } from 'react-router-dom';

function LowerNavBar() {

    return (
        <nav className='LowerNav'>
        <h3>Choose Item</h3>
            <ul className='lower-nav-links'>
                <Link to='/orders'><li>Orders</li></Link>
                <Link to='/orderlines'><li>Orderlines</li></Link>
                <Link to='/orderlinelists'><li>Orderlinelists</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/users'><li>Users</li></Link>
            </ul>
        </nav>
    )
};

export default LowerNavBar;
