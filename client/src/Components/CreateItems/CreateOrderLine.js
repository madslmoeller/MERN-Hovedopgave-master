import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function CreateUser() {

    const [id, setId] = useState()
    const [orderId, setOrderId] = useState()
    const [orderLineId, setOrderLineId] = useState()

    const [newId, setNewId] = useState('')
    const [newOrderId, setNewOrderId] = useState('')
    const [newOrderLineId, setNewOrderLineId] = useState('')

    const [orderLineList, setOrderLineList] = useState([]);

    const addToList = () => {
        Axios.post('http://localhost:3001/create/orderline', {
            id: id,
            orderId: orderId,
            orderLineId: orderLineId,
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/read/orderline').then((response) => {
            setOrderLineList(response.data)
        });
    }, []);

    const updateOrderLine = (id) => {
        Axios.put('http://localhost:3001/update/orderline', {
          id: id,
          newId: newId,
          newOrderId:newOrderId,
          newOrderLineId:newOrderLineId,
        });
      };
    
      const deleteOrderLine = (id) => {
        Axios.delete(`http://localhost:3001/delete/orderline/${id}`);
      };

    return (
        <div>
            <div className="AppFour">
                <h1>Create OrderLine</h1>
                <div className='createOrderLine'>
                    <label>OrderLine ID: </label>
                    <input type='text' placeholder='Type ID...'
                        onChange={(event) => {
                            setId(event.target.value)
                        }}
                    />
                    <label>OrderId: </label>
                    <input type='text' placeholder='Type OrderId...'
                        onChange={(event) => {
                            setOrderId(event.target.value)
                        }}
                    />
                    <label>OderLineId: </label>
                    <input type='text' placeholder='Type OderLineId...'
                        onChange={(event) => {
                            setOrderLineId(event.target.value)
                        }}
                    />
                </div>
                <button onClick={addToList}>Add To List</button>
                {orderLineList.map((val, key) => {
                    return <div key={key}>
                        <div className='orderLineBox'>
                            <div className='orderLineHeader'>
                                <h3>Update/Delete OrderLine</h3>
                            </div>
                            <div className='orderLineRole'>
                                <h3>OrderLine ID: {val.id}</h3>
                                <h3>OrderId: {val.orderId}</h3>
                                <h3>OrderLineId: {val.orderLineId}</h3>
                            </div>
                            <input type='text' placeholder='New ID...'
                                onChange={(event) => {
                                    setNewId(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New orderId...'
                                onChange={(event) => {
                                    setNewOrderId(event.target.value)
                                }}
                            />
                            <input type='text' placeholder='New orderLineId...'
                                onChange={(event) => {
                                    setNewOrderLineId(event.target.value)
                                }}
                            />
                        </div>
                        <button onClick={() => updateOrderLine(val._id)}>Update</button>
                        <button onClick={() => deleteOrderLine(val._id)}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    );
};

export default CreateUser;