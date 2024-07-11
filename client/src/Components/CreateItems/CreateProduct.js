import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function CreateProduct() {

    const [id, setId] = useState();
    const [producerId, setProducerId] = useState();
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [image, setImage] = useState();
    const [category, setCategory] = useState();
    const [unit, setUnit] = useState();
    const [unitSize, setUnitSize] = useState(0);
    const [bulkUnit, setBulkUnit] = useState();
    const [bulkSize, setBulkSize] = useState(0);
    const [price, setPrice] = useState(0);

    const [newId, setNewId] = useState('');
    const [newProducerId, setNewProducerId] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newType, setNewType] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newUnit, setNewUnit] = useState('');
    const [newUnitSize, setNewUnitSize] = useState(Number);
    const [newBulkUnit, setNewBulkUnit] = useState('');
    const [newBulkSize, setNewBulkSize] = useState(Number);
    const [newPrice, setNewPrice] = useState(Number);

    const [productList, setProductList] = useState([]);

    const addToList = () => {
        Axios.post('http://localhost:3001/create/product', {
            id: id,
            producerId: producerId,
            title: title,
            type: type,
            image: image,
            category: category,
            unit: unit,
            unitSize: unitSize,
            bulkUnit: bulkUnit,
            bulkSize: bulkSize,
            price: price
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/read/product').then((response) => {
            setProductList(response.data)
        });
    }, []);

    const updateProduct = (id) => {
        Axios.put('http://localhost:3001/update/product', {
            id: id,
            newId: newId,
            newProducerId: newProducerId,
            newTitle: newTitle,
            newType: newType,
            newImage: newImage,
            newCategory: newCategory,
            newUnit: newUnit,
            newUnitSize: newUnitSize,
            newBulkUnit: newBulkUnit,
            newBulkSize: newBulkSize,
            newPrice: newPrice
        });
    };

    const deleteProduct = (id) => {
        Axios.delete(`http://localhost:3001/delete/product/${id}`)
    };

    return (
        <div>
            <div className='text'>
                <div className='AppTwo'>
                    <h1>Create Product</h1>
                    <div className='createProduct'>
                        <div className='first'>
                            <label>ID:</label>
                            <input type='text' placeholder='Insert ID...'
                                onChange={(event) => {
                                    setId(event.target.value)
                                }}
                            />
                            <label>ProducerId:</label>
                            <input type='text' placeholder='Insert producerId...'
                                onChange={(event) => {
                                    setProducerId(event.target.value)
                                }}
                            />
                            <label>Title:</label>
                            <input type='text' placeholder='Insert Title...'
                                onChange={(event) => {
                                    setTitle(event.target.value)
                                }}
                            />
                            <label>ProductType:</label>
                            <input type='text' placeholder='Insert ProductType...'
                                onChange={(event) => {
                                    setType(event.target.value)
                                }}
                            />
                            <label>Image:</label>
                            <input type='text' placeholder='Insert Image...'
                                onChange={(event) => {
                                    setImage(event.target.value)
                                }}
                            />
                            <label>Category:</label>
                            <input type='text' placeholder='Insert Category...'
                                onChange={(event) => {
                                    setCategory(event.target.value)
                                }}
                            />
                            <label>Unit:</label>
                            <input type='text' placeholder='Insert Unit...'
                                onChange={(event) => {
                                    setUnit(event.target.value)
                                }}
                            />
                            <label>UnitSize:</label>
                            <input type='Number' placeholder='Insert UnitSize...'
                                onChange={(event) => {
                                    setUnitSize(event.target.value)
                                }}
                            />
                            <label>bulkUnit:</label>
                            <input type='text' placeholder='Insert bulkUnit...'
                                onChange={(event) => {
                                    setBulkUnit(event.target.value)
                                }}
                            />
                            <label>bulkSize:</label>
                            <input type='Number' placeholder='Insert bulkSize...'
                                onChange={(event) => {
                                    setBulkSize(event.target.value)
                                }}
                            />
                            <label>Price:</label>
                            <input type='Number' placeholder='Insert Price...'
                                onChange={(event) => {
                                    setPrice(event.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <button onClick={addToList}>Add to list</button>
                    {productList.map((val, key) => {
                        return <div key={key}>
                            <div className='productBox'>
                                <div className='productHeader'>
                                    <h3>Update/Delete Product</h3>
                                </div>
                                <div className='productText'>
                                    <h3>ID: {val.id}</h3>
                                    <h3>ProducerId: {val.producerId}</h3>
                                    <h3>Title: {val.title}</h3>
                                    <h3>Type: {val.type}</h3>
                                    <h3>Image: {val.image}</h3>
                                    <h3>Category: {val.category}</h3>
                                    <h3>Unit: {val.unit}</h3>
                                    <h3>UnitSize:{val.unitSize}</h3>
                                    <h3>bulkUnit: {val.bulkUnit}</h3>
                                    <h3>bulkSize: {val.bulkSize}</h3>
                                    <h3>Price: {val.price}</h3>
                                </div>
                                <input type='text' placeholder='New ID...'
                                    onChange={(event) => {
                                        setNewId(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New ProducerId...'
                                    onChange={(event) => {
                                        setNewProducerId(event.target.value)
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
                                <input type='text' placeholder='New Image...'
                                    onChange={(event) => {
                                        setNewImage(event.target.value)
                                    }}
                                />
                                <input type='text' placeholder='New Category...'
                                    onChange={(event) => {
                                        setNewCategory(event.target.value)
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
                            </div>
                            <button onClick={() => updateProduct(val._id)}>Update</button>
                            <button onClick={() => deleteProduct(val._id)}>Delete</button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;
