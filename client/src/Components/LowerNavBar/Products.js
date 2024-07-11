import React from 'react'
import CreateProducts from '../CreateItems/CreateProduct';

import { Link } from 'react-router-dom';

function Products() {
    return (
        <div>
            <nav className='LowerNav'>
            <h3>Product Section</h3>
                <ul className='lower-nav-links'>
                    <Link to='/orders'><li>Orders</li></Link>
                    <Link to='/orderlines'><li>Orderlines</li></Link>
                    <Link to='/orderlinelists'><li>Orderlinelists</li></Link>
                    <Link to='/products'><li>Products</li></Link>
                    <Link to='/users'><li>Users</li></Link>
                </ul>
            </nav>
            <CreateProducts />
        </div>
    )
}

export default Products;