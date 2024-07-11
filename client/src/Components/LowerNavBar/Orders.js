import React from 'react'
import CreateOrder from '../CreateItems/CreateOrders';

import { Link } from 'react-router-dom';

function Orders() {
    return (
        <div>
            <nav className='LowerNav'>
            <h3>Order Section</h3>
                <ul className='lower-nav-links'>
                    <Link to='/orders'><li>Orders</li></Link>
                    <Link to='/orderlines'><li>Orderlines</li></Link>
                    <Link to='/orderlinelists'><li>Orderlinelists</li></Link>
                    <Link to='/products'><li>Products</li></Link>
                    <Link to='/users'><li>Users</li></Link>
                </ul>
            </nav>
            <CreateOrder />
        </div>
    )
}

export default Orders;