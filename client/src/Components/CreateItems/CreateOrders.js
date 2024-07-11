import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Orders() {

    const [id, setId] = useState()
    const [handle, setHandle] = useState(0);
    const [userId, setUserId] = useState();
    const [billingEmail, setBillingEmail] = useState();
    const [billingName, setBillingName] = useState();
    const [billingCompany, setBillingCompany] = useState();
    const [billingAddress, setBillingAddress] = useState();
    const [billingCity, setBillingCity] = useState();
    const [billingPostCode, setBillingPostCode] = useState();
    const [billingState, setBillingState] = useState();
    const [billingCountry, setBillingCountry] = useState();
    const [shippingName, setShippingName] = useState();
    const [shippingCompany, setShippingCompany] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [shippingCity, setShippingCity] = useState();
    const [shippingPostCode, setShippingPostCode] = useState();
    const [shippingState, setShippingState] = useState();
    const [shippingCountry, setShippingCountry] = useState();
    // const [shippingDate, setShippingDate] = useState();
    // const [createdAt, setCreatedAt] = useState();
    // const [updatedAt, setUpdatedAt] = useState();

    const [newId, setNewId] = useState('');
    const [newHandle, setNewHandle] = useState(Number);
    const [newUserId, setNewUserId] = useState('');
    const [newBillingEmail, setNewBillingEmail] = useState('');
    const [newBillingName, setNewBillingName] = useState('');
    const [newBillingCompany, setNewBillingCompany] = useState('');
    const [newBillingAddress, setNewBillingAddress] = useState('');
    const [newBillingCity, setNewBillingCity] = useState('');
    const [newBillingPostCode, setNewBillingPostCode] = useState('');
    const [newBillingState, setNewBillingState] = useState('');
    const [newBillingCountry, setNewBillingCountry] = useState('');
    const [newShippingName, setNewShippingName] = useState('');
    const [newShippingCompany, setNewShippingCompany] = useState('');
    const [newShippingAddress, setNewShippingAddress] = useState('');
    const [newShippingCity, setNewShippingCity] = useState('');
    const [newShippingPostCode, setNewShippingPostCode] = useState('');
    const [newShippingState, setNewShippingState] = useState('');
    const [newShippingCountry, setNewShippingCountry] = useState('');

    const [orderList, setOrderList] = useState([]);

    const addToList = () => {
        Axios.post('http://localhost:3001/create/order', {
            id: id,
            handle: handle,
            userId: userId,
            billingEmail: billingEmail,
            billingName: billingName,
            billingCompany: billingCompany,
            billingAddress: billingAddress,
            billingCity: billingCity,
            billingPostCode: billingPostCode,
            billingCountry: billingCountry,
            billingState: billingState,
            shippingName: shippingName,
            shippingCompany: shippingCompany,
            shippingAddress: shippingAddress,
            shippingCity: shippingCity,
            shippingPostCode: shippingPostCode,
            shippingState: shippingState,
            shippingCountry: shippingCountry,
            // shippingDate: shippingDate,
            // createdAt: createdAt,
            // updatedAt: updatedAt,
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/read/order').then((response) => {
            setOrderList(response.data)
        });
    }, []);

    const updateOrder = (id) => {
        Axios.put('http://localhost:3001/update/order', {
            id: id,
            newId: newId,
            newHandle: newHandle,
            newUserId: newUserId,
            newBillingEmail: newBillingEmail,
            newBillingName: newBillingName,
            newBillingCompany: newBillingCompany,
            newBillingAddress: newBillingAddress,
            newBillingCity: newBillingCity,
            newBillingPostCode: newBillingPostCode,
            newBillingState: newBillingState,
            newBillingCountry: newBillingCountry,
            newShippingName: newShippingName,
            newShippingCompany: newShippingCompany,
            newShippingAddress: newShippingAddress,
            newShippingCity: newShippingCity,
            newShippingPostCode: newShippingPostCode,
            newShippingState: newShippingState,
            newShippingCountry: newShippingCountry,
        });
    };

    const deleteOrder = (id) => {
        Axios.delete(`http://localhost:3001/delete/order/${id}`)
    };

    return (
        <div>
            {/* <div className='header'>
                <h1>Raahandel Hovedopgave</h1>
            </div> */}
            <div className="AppThree">
                <h1>Creater Order</h1>
                <div className='createOrder'>
                    <div className='textLeft'>
                        <label>ID:</label>
                        <input type='text' placeholder='Type Your ID...'
                            onChange={(event) => {
                                setId(event.target.value)
                            }}
                        />
                        <label>Handle:</label>
                        <input type='Number' placeholder='Type Your handle...'
                            onChange={(event) => {
                                setHandle(event.target.value)
                            }}
                        />
                        <label>userId: </label>
                        <input type='text' placeholder='Type userId...'
                            onChange={(event) => {
                                setUserId(event.target.value)
                            }}
                        />
                        <label>billingEmail: </label>
                        <input type='text' placeholder='Type billingEmail...'
                            onChange={(event) => {
                                setBillingEmail(event.target.value)
                            }}
                        />
                        <label>billingName: </label>
                        <input type='text' placeholder='Type billingName...'
                            onChange={(event) => {
                                setBillingName(event.target.value)
                            }}
                        />
                        <label>billingCompany: </label>
                        <input type='text' placeholder='Type billingCompany...'
                            onChange={(event) => {
                                setBillingCompany(event.target.value)
                            }}
                        />
                        <label>billingAddress: </label>
                        <input type='text' placeholder='Type billingAddress...'
                            onChange={(event) => {
                                setBillingAddress(event.target.value)
                            }}
                        />
                        <label>billingCity: </label>
                        <input type='text' placeholder='Type billingCity...'
                            onChange={(event) => {
                                setBillingCity(event.target.value)
                            }}
                        />
                        <label>billingPostCode: </label>
                        <input type='text' placeholder='Type billingPostCode...'
                            onChange={(event) => {
                                setBillingPostCode(event.target.value)
                            }}
                        />
                    </div>
                    <div className='textRight'>
                        <label>billingState: </label>
                        <input type='text' placeholder='Type billingState...'
                            onChange={(event) => {
                                setBillingState(event.target.value)
                            }}
                        />
                        <label>billingCountry: </label>
                        <input type='text' placeholder='Type billingCountry...'
                            onChange={(event) => {
                                setBillingCountry(event.target.value)
                            }}
                        />
                        <label>shippingName: </label>
                        <input type='text' placeholder='Type shippingName...'
                            onChange={(event) => {
                                setShippingName(event.target.value)
                            }}
                        />
                        <label>shippingCompany: </label>
                        <input type='text' placeholder='Type shippingCompany...'
                            onChange={(event) => {
                                setShippingCompany(event.target.value)
                            }}
                        />
                        <label>shippingAddress: </label>
                        <input type='text' placeholder='Type shippingAddress...'
                            onChange={(event) => {
                                setShippingAddress(event.target.value)
                            }}
                        />
                        <label>shippingCity: </label>
                        <input type='text' placeholder='Type shippingCity...'
                            onChange={(event) => {
                                setShippingCity(event.target.value)
                            }}
                        />
                        <label>shippingPostCode: </label>
                        <input type='text' placeholder='Type shippingPostCode...'
                            onChange={(event) => {
                                setShippingPostCode(event.target.value)
                            }}
                        />
                        <label>shippingState: </label>
                        <input type='text' placeholder='Type shippingState...'
                            onChange={(event) => {
                                setShippingState(event.target.value)
                            }}
                        />
                        <label>shippingCountry: </label>
                        <input type='text' placeholder='Type shippingCountry...'
                            onChange={(event) => {
                                setShippingCountry(event.target.value)
                            }}
                        />
                    </div>
                </div>
                <button onClick={addToList}>Add To List</button>
                {orderList.map((val, key) => {
                    return <div key={key}>
                        <div className='orderBox'>
                            <div className='orderHeader'>
                                <h3>Update/Delete Order</h3>
                            </div>
                            <div className='orderRole'>
                                <h3>ID: {val.id}</h3>
                                <h3>Handle: {val.handle}</h3>
                                <h3>userId: {val.userId}</h3>
                                <h3>billingEmail: {val.billingEmail}</h3>
                                <h3>billingName: {val.billingName}</h3>
                                <h3>billingCompany: {val.billingCompany}</h3>
                                <h3>billingAddress: {val.billingAddress}</h3>
                                <h3>billingCity: {val.billingCity}</h3>
                                <h3>billingPostCode: {val.billingPostCode}</h3>
                                <h3>billingState: {val.billingState}</h3>
                                <h3>billingCountry: {val.billingCountry}</h3>
                                <h3>shippingName: {val.shippingName}</h3>
                                <h3>shippingCompany: {val.shippingCompany}</h3>
                                <h3>shippingAddress: {val.shippingAddress}</h3>
                                <h3>shippingCity: {val.shippingCity}</h3>
                                <h3>shippingPostCode: {val.shippingPostCode}</h3>
                                <h3>shippingState: {val.shippingState}</h3>
                                <h3>shippingCountry: {val.shippingCountry}</h3>
                            </div>
                            <input type='text' placeholder='New ID...'
                                onChange={(event) => {
                                    setNewId(event.target.value)
                                }}
                            />
                            <input type='Number' placeholder='New Handle...'
                                onChange={(event) => {
                                    setNewHandle(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New UserId...'
                                onChange={(event) => {
                                    setNewUserId(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New billingEmail...'
                                onChange={(event) => {
                                    setNewBillingEmail(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New billingName...'
                                onChange={(event) => {
                                    setNewBillingName(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New billingCompany...'
                                onChange={(event) => {
                                    setNewBillingCompany(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New billingAddress...'
                                onChange={(event) => {
                                    setNewBillingAddress(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New billingCity...'
                                onChange={(event) => {
                                    setNewBillingCity(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New billingPostCode...'
                                onChange={(event) => {
                                    setNewBillingPostCode(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New billingState...'
                                onChange={(event) => {
                                    setNewBillingState(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New billingCountry...'
                                onChange={(event) => {
                                    setNewBillingCountry(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New shippingName...'
                                onChange={(event) => {
                                    setNewShippingName(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New shippingCompany...'
                                onChange={(event) => {
                                    setNewShippingCompany(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New shippingAddress...'
                                onChange={(event) => {
                                    setNewShippingAddress(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New shippingCity...'
                                onChange={(event) => {
                                    setNewShippingCity(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New shippingPostCode...'
                                onChange={(event) => {
                                    setNewShippingPostCode(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New shippingState...'
                                onChange={(event) => {
                                    setNewShippingState(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New shipping...'
                                onChange={(event) => {
                                    setNewShippingCountry(event.target.value)
                                }}
                            />
                        </div>
                        <button onClick={() => updateOrder(val._id)}>Update</button>
                        <button onClick={() => deleteOrder(val._id)}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Orders;
