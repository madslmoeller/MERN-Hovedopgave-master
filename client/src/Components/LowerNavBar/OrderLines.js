import React from 'react'
import CreateOrderLines from '../CreateItems/CreateOrderLine';

import { Link } from 'react-router-dom';

function OrderLines() {
    return (
        <div>
            <nav className='LowerNav'>
            <h3>OrderLine Section</h3>
                <ul className='lower-nav-links'>
                    <Link to='/orders'><li>Orders</li></Link>
                    <Link to='/orderlines'><li>Orderlines</li></Link>
                    <Link to='/orderlinelists'><li>Orderlinelists</li></Link>
                    <Link to='/products'><li>Products</li></Link>
                    <Link to='/users'><li>Users</li></Link>
                </ul>
            </nav>
            <CreateOrderLines />
        </div>
    )
}

export default OrderLines;