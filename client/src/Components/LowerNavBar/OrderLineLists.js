import React from 'react'
import CreateOrderLineList from '../CreateItems/CreateOrderLineList';

import { Link } from 'react-router-dom';

function OrderLinesLists() {
    return (
        <div>
            <nav className='LowerNav'>
            <h3>OrderLineList Section</h3>
                <ul className='lower-nav-links'>
                    <Link to='/orders'><li>Orders</li></Link>
                    <Link to='/orderlines'><li>Orderlines</li></Link>
                    <Link to='/orderlinelists'><li>Orderlinelists</li></Link>
                    <Link to='/products'><li>Products</li></Link>
                    <Link to='/users'><li>Users</li></Link>
                </ul>
            </nav>
            <CreateOrderLineList />
        </div>
    )
}

export default OrderLinesLists;