import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function CreateOrderLineList() {

    const [id, setId] = useState();
    const [productId, setProductId] = useState();
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [unit, setUnit] = useState();
    const [unitSize, setUnitSize] = useState(0);
    const [bulkUnit, setBulkUnit] = useState();
    const [bulkSize, setBulkSize] = useState(0);
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const [newId, setNewId] = useState('');
    const [newProductId, setNewProductId] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newType, setNewType] = useState('');
    const [newUnit, setNewUnit] = useState('');
    const [newUnitSize, setNewUnitSize] = useState(Number);
    const [newBulkUnit, setNewBulkUnit] = useState('');
    const [newBulkSize, setNewBulkSize] = useState(Number);
    const [newPrice, setNewPrice] = useState(Number);
    const [newQuantity, setNewQuantity] = useState(Number);

    const [orderLineList, setOrderLineList] = useState([]);

    const addToList = () => {
        Axios.post('http://localhost:3001/create/orderlinelist', {
            id: id,
            productId: productId,
            title: title,
            type: type,
            unit: unit,
            unitSize: unitSize,
            bulkUnit: bulkUnit,
            bulkSize: bulkSize,
            price: price,
            quantity: quantity,
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/read/orderlinelist').then((response) => {
            setOrderLineList(response.data)
        });
    }, []);

    const updateOrderLineList = (id) => {
        Axios.put('http://localhost:3001/update/product', {
            id: id,
            newId: newId,
            newProductId: newProductId,
            newTitle: newTitle,
            newType: newType,
            newUnit: newUnit,
            newUnitSize: newUnitSize,
            newBulkUnit: newBulkUnit,
            newBulkSize: newBulkSize,
            newPrice: newPrice,
            newQuantity: newQuantity,
        });
    };

    const deleteOrderLineList = (id) => {
        Axios.delete(`http://localhost:3001/delete/product/${id}`)
    };

    return (
        <div>
            <div className='text'>
                <div className='AppFive'>
                    <h1>Create OrderLineList</h1>
                    <div className='createOrderLineList'>
                        <div className='first'>
                            <label>ID:</label>
                            <input type='text' placeholder='Insert ID...'
                                onChange={(event) => {
                                    setId(event.target.value)
                                }}
                            />
                            <label>ProductId: </label>
                            <input type='text' placeholder='Insert productId...'
                                onChange={(event) => {
                                    setProductId(event.target.value)
                                }}
                            />
                            <label>Title: </label>
                            <input type='text' placeholder='Insert Title...'
                                onChange={(event) => {
                                    setTitle(event.target.value)
                                }}
                            />
                            <label>ProductType: </label>
                            <input type='text' placeholder='Insert ProductType...'
                                onChange={(event) => {
                                    setType(event.target.value)
                                }}
                            />
                            <label>Unit: </label>
                            <input type='text' placeholder='Insert Unit...'
                                onChange={(event) => {
                                    setUnit(event.target.value)
                                }}
                            />
                            <label>UnitSize: </label>
                            <input type='Number' placeholder='Insert UnitSize...'
                                onChange={(event) => {
                                    setUnitSize(event.target.value)
                                }}
                            />
                            <label>bulkUnit: </label>
                            <input type='text' placeholder='Insert bulkUnit...'
                                onChange={(event) => {
                                    setBulkUnit(event.target.value)
                                }}
                            />
                            <label>bulkSize: </label>
                            <input type='Number' placeholder='Insert bulkSize...'
                                onChange={(event) => {
                                    setBulkSize(event.target.value)
                                }}
                            />
                            <label>Price: </label>
                            <input type='Number' placeholder='Insert Price...'
                                onChange={(event) => {
                                    setPrice(event.target.value)
                                }}
                            />
                            <label>Quantity: </label>
                            <input type='Number' placeholder='Insert Quantity...'
                                onChange={(event) => {
                                    setQuantity(event.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <button onClick={addToList}>Add to list</button>
                    {orderLineList.map((val, key) => {
                        return <div key={key}>
                            <div className='orderLineListBox'>
                                <div className='orderLineListHeader'>
                                    <h3>Update/Delete OrderLineList</h3>
                                </div>
                                <div className='orderLineListText'>
                                    <h3>ID: {val.id}</h3>
                                    <h3>ProductId: {val.productId}</h3>
                                    <h3>Title: {val.title}</h3>
                                    <h3>Type: {val.type}</h3>
                                    <h3>Unit: {val.unit}</h3>
                                    <h3>UnitSize:{val.unitSize}</h3>
                                    <h3>bulkUnit: {val.bulkUnit}</h3>
                                    <h3>bulkSize: {val.bulkSize}</h3>
                                    <h3>Price: {val.price}</h3>
                                    <h3>Quantity: {val.quantity}</h3>
                                </div>
                                <input type='text' placeholder='New ID...'
                                    onChange={(event) => {
                                        setNewId(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New ProductId...'
                                    onChange={(event) => {
                                        setNewProductId(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New Title...'
                                    onChange={(event) => {
                                        setNewTitle(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New Type...'
                                    onChange={(event) => {
                                        setNewType(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New Unit...'
                                    onChange={(event) => {
                                        setNewUnit(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New UnitSize...'
                                    onChange={(event) => {
                                        setNewUnitSize(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New bulkUnit...'
                                    onChange={(event) => {
                                        setNewBulkUnit(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New bulkSize...'
                                    onChange={(event) => {
                                        setNewBulkSize(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New Price...'
                                    onChange={(event) => {
                                        setNewPrice(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New Quantity...'
                                    onChange={(event) => {
                                        setNewQuantity(event.target.value)
                                    }}
                                />
                            </div>
                            <button onClick={() => updateOrderLineList(val._id)}>Update</button>
                            <button onClick={() => deleteOrderLineList(val._id)}>Delete</button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default CreateOrderLineList;