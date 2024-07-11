const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const OrderCollection = require('./models/ordersCollection');
const OrderLineCollection = require('./models/orderLineCollection');
const OrderLineListCollection = require('./models/orderLineListCollection');
const UserCollection = require('./models/userCollection');
const ProductCollection = require('./models/productCollection');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://newuser:trying@crud.csgx6.mongodb.net/raahandelDB?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//------------------------------------------------------------------------//
//Orders
app.post('/create/order', async (req, res) => {

    const id = req.body.id;
    const handle = req.body.handle;
    const userId = req.body.userId;
    const billingEmail = req.body.billingEmail;
    const billingName = req.body.billingName;
    const billingCompany = req.body.billingCompany;
    const billingAddress = req.body.billingAddress;
    const billingCity = req.body.billingCity;
    const billingPostCode = req.body.billingPostCode;
    const billingCountry = req.body.billingCountry;
    const billingState = req.body.billingState;
    const shippingName = req.body.shippingName;
    const shippingCompany = req.body.shippingCompany;
    const shippingAddress = req.body.shippingAddress;
    const shippingCity = req.body.shippingCity;
    const shippingPostCode = req.body.shippingPostCode;
    const shippingCountry = req.body.shippingCountry;
    const shippingState = req.body.shippingState;
    // const shippingDate = req.body.shippingDate;
    // const createdAt = req.body.createdAt;
    // const updatedAt = req.body.updatedAt;
    const order = new OrderCollection({
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
        // shippingDate:shippingDate,
        // createdAt:createdAt,
        // updatedAt:updatedAt,
    });

    try {
        await order.save();
        res.send('order Created')
    } catch (err) {
        console.log(err)
    };
});

app.get('/read/order', async (req, res) => {

    await OrderCollection.find({}, (err, result) => {
        if (err) {
            res.send(err)
        };

        res.send(result);
    });

});

app.put('/update/order', async (req, res) => {

    const newId = req.body.newId;
    const newHandle = req.body.newHandle;
    const newUserId = req.body.newUserId;
    const newBillingEmail = req.body.newBillingEmail;
    const newBillingName = req.body.newBillingName;
    const newBillingCompany = req.body.newBillingCompany;
    const newBillingAddress = req.body.newBillingAddress;
    const newBillingCity = req.body.newBillingCity;
    const newBillingPostCode = req.body.newBillingPostCode;
    const newBillingState = req.body.newBillingState;
    const newBillingCountry = req.body.newBillingCountry;
    const newShippingName = req.body.newShippingName;
    const newShippingCompany = req.body.newShippingCompany;
    const newShippingAddress = req.body.newShippingAddress;
    const newShippingCity = req.body.newShippingCity;
    const newShippingPostCode = req.body.newShippingPostCode;
    const newShippingState = req.body.newShippingState;
    const newShippingCountry = req.body.newShippingCountry;
    const id = req.body.id;

    try {
        await OrderCollection.findById(id, (err, updateOrder) => {
            updateOrder.id = newId;
            updateOrder.handle = newHandle;
            updateOrder.userId = newUserId;
            updateOrder.billingEmail = newBillingEmail;
            updateOrder.billingName = newBillingName;
            updateOrder.billingCompany = newBillingCompany;
            updateOrder.billingAddress = newBillingAddress;
            updateOrder.billingCity = newBillingCity;
            updateOrder.billingPostCode = newBillingPostCode;
            updateOrder.billingState = newBillingState;
            updateOrder.billingCountry = newBillingCountry;
            updateOrder.shippingName = newShippingName;
            updateOrder.shippingCompany = newShippingCompany;
            updateOrder.shippingAddress = newShippingAddress;
            updateOrder.shippingCity = newShippingCity;
            updateOrder.shippingPostCode = newShippingPostCode;
            updateOrder.shippingState = newShippingState;
            updateOrder.shippingCountry = newShippingCountry;
            updateOrder.save();
            res.send('Order Updated')
        });
    } catch (err) {
        console.log(err)
    };
});

app.delete('/delete/order/:id', async (req, res) => {
    const id = req.params.id;

    await OrderCollection.findByIdAndRemove(id).exec();
    res.send();
});
//------------------------------------------------------------------------//

//------------------------------------------------------------------------//
//OrderLine
app.post('/create/orderline', async (req, res) => {

    const id = req.body.id;
    const orderId = req.body.orderId;
    const orderLineId = req.body.orderLineId;
    const orderLine = new OrderLineCollection({
        id: id,
        orderId: orderId,
        orderLineId: orderLineId,
    });

    try {
        await orderLine.save();
        res.send('OrderLine Created')
    } catch (err) {
        console.log(err)
    };
});

app.get('/read/orderline', async (req, res) => {

    OrderLineCollection.find({}, (err, result) => {
        if (err) {
            res.send(err)
        };

        res.send(result);
    });

});

app.put('/update/orderline', async (req, res) => {

    const newId = req.body.newId;
    const newOrderId = req.body.newOrderId;
    const newOrderLineId = req.body.newOrderLineId;
    const id = req.body.id;

    try {
        await OrderLineCollection.findById(id, (err, updateOrderLine) => {
            updateOrderLine.id = newId;
            updateOrderLine.orderId = newOrderId;
            updateOrderLine.orderLineId = newOrderLineId;
            updateOrderLine.save();
            res.send('User Updated')
        });
    } catch (err) {
        console.log(err)
    };
});

app.delete('/delete/orderline/:id', async (req, res) => {
    const id = req.params.id;

    await OrderLineCollection.findByIdAndRemove(id).exec();
    res.send();
});
//------------------------------------------------------------------------//

//------------------------------------------------------------------------//
//OrderLineList
app.post('/create/orderlinelist', async (req, res) => {

    const id = req.body.id;
    const productId = req.body.productId;
    const title = req.body.title;
    const type = req.body.type;
    const unit = req.body.unit;
    const unitSize = req.body.unitSize;
    const bulkUnit = req.body.bulkUnit;
    const bulkSize = req.body.bulkSize;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const orderLineList = new OrderLineListCollection({
        id: id,
        productId: productId,
        title: title,
        type: type,
        unit: unit,
        unitSize: unitSize,
        bulkUnit: bulkUnit,
        bulkUnitSize: bulkSize,
        price: price,
        quantity: quantity,
    });

    try {
        await orderLineList.save();
        res.send('OrderLineList Created!')
    } catch (err) {
        console.log(err)
    };
});

app.get('/read/orderlinelist', async (req, res) => {

    OrderLineListCollection.find({}, (err, result) => {
        if (err) {
            res.send(err)
        };

        res.send(result);
    });

});

app.put('/update/orderlinelist', async (req, res) => {

    const newId = req.body.newId;
    const newProductId = req.body.newProductId;
    const newTitle = req.body.newTitle;
    const newType = req.body.newType;
    const newUnit = req.body.newUnit;
    const newUnitSize = req.body.newUnitSize;
    const newBulkUnit = req.body.newBulkUnit;
    const newBulkSize = req.body.newBulkSize;
    const newPrice = req.body.newPrice;
    const newQuantity = req.body.newQuantity;
    const id = req.body.id;

    try {
        await OrderLineListCollection.findById(id, (err, updateOrderLineList) => {
            updateOrderLineList.newId = newId;
            updateOrderLineList.newProductId = newProductId;
            updateOrderLineList.newTitle = newTitle;
            updateOrderLineList.newType = newType;
            updateOrderLineList.newUnit = newUnit;
            updateOrderLineList.newUnitSize = newUnitSize;
            updateOrderLineList.newBulkUnit = newBulkUnit;
            updateOrderLineList.newBulkSize = newBulkSize;
            updateOrderLineList.newPrice = newPrice;
            updateOrderLineList.newQuantity = newQuantity;
            updateOrderLineList.save();
            res.send('OrderLineList Updated')
        });
    } catch (err) {
        console.log(err)
    };
});

app.delete('/delete/orderlinelist/:id', async (req, res) => {
    const id = req.params.id;

    await OrderLineListCollection.findByIdAndRemove(id).exec();
    res.send();
});
//------------------------------------------------------------------------//

//------------------------------------------------------------------------//
//User
app.post('/create/user', async (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const role = req.body.role;
    const user = new UserCollection({ id: id, name: name, role: role });

    try {
        await user.save();
        res.send('User Created')
    } catch (err) {
        console.log(err)
    };
});

app.get('/read/user', async (req, res) => {

    UserCollection.find({}, (err, result) => {
        if (err) {
            res.send(err)
        };

        res.send(result);
    });

});

app.put('/update/user', async (req, res) => {

    const newId = req.body.newId;
    const newName = req.body.newName;
    const newRole = req.body.newRole;
    const id = req.body.id;

    try {
        await UserCollection.findById(id, (err, updateUser) => {
            updateUser.id = newId;
            updateUser.name = newName;
            updateUser.role = newRole;
            updateUser.save();
            res.send('User Updated')
        });
    } catch (err) {
        console.log(err)
    };
});

app.delete('/delete/user/:id', async (req, res) => {
    const id = req.params.id;

    await UserCollection.findByIdAndRemove(id).exec();
    res.send();
});
//------------------------------------------------------------------------//

//------------------------------------------------------------------------//
//Product
app.post('/create/product', async (req, res) => {

    const id = req.body.id;
    const producerId = req.body.producerId;
    const title = req.body.title;
    const type = req.body.type;
    const image = req.body.image;
    const category = req.body.category;
    const unit = req.body.unit;
    const unitSize = req.body.unitSize;
    const bulkUnit = req.body.bulkUnit;
    const bulkUnitSize = req.body.bulkUnitSize;
    const price = req.body.price;
    const product = new ProductCollection({
        id: id,
        producerId: producerId,
        title: title,
        type: type,
        image: image,
        category: category,
        unit: unit,
        unitSize: unitSize,
        bulkUnit: bulkUnit,
        bulkUnitSize: bulkUnitSize,
        price: price
    });

    try {
        await product.save();
        res.send('Product Created!')
    } catch (err) {
        console.log(err)
    };
});

app.get('/read/product', async (req, res) => {

    ProductCollection.find({}, (err, result) => {
        if (err) {
            res.send(err)
        };

        res.send(result);
    });

});

app.put('/update/product', async (req, res) => {

    const newId = req.body.newId;
    const newProducerId = req.body.newProducerId;
    const newTitle = req.body.newTitle;
    const newType = req.body.newType;
    const newImage = req.body.newImage;
    const newCategory = req.body.newCategory;
    const newUnit = req.body.newUnit;
    const newUnitSize = req.body.newUnitSize;
    const newBulkUnit = req.body.newBulkUnit;
    const newBulkSize = req.body.newBulkSize;
    const newPrice = req.body.newPrice;
    const id = req.body.id;

    try {
        await ProductCollection.findById(id, (err, updateProduct) => {
            updateProduct.newId = newId;
            updateProduct.newProducerId = newProducerId;
            updateProduct.newTitle = newTitle;
            updateProduct.newType = newType;
            updateProduct.newImage = newImage;
            updateProduct.newCategory = newCategory;
            updateProduct.newUnit = newUnit;
            updateProduct.newUnitSize = newUnitSize;
            updateProduct.newBulkUnit = newBulkUnit;
            updateProduct.newBulkSize = newBulkSize;
            updateProduct.newPrice = newPrice;
            updateProduct.save();
            res.send('Food Updated')
        });
    } catch (err) {
        console.log(err)
    };
});

app.delete('/delete/product/:id', async (req, res) => {
    const id = req.params.id;

    await ProductCollection.findByIdAndRemove(id).exec();
    res.send();
});
//------------------------------------------------------------------------//

app.listen(3001, () => {
    console.log('...Listening to server 3001');
});