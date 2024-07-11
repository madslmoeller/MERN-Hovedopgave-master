import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='UpperNav'>
            <h1>Welcome to Raahandel Project</h1>
            <ul className='upper-nav-links'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/items'><li>CRUD Items</li></Link>
                <Link to='/statistics'><li>Statistics</li></Link>
            </ul>
        </nav>
    )
};



export default NavBar;
