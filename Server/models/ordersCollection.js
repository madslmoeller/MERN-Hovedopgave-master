const mongoose = require('mongoose');

//Here we define the structure of the document
const raahandelSchema = new mongoose.Schema({
    //Orders
    id: { type: String },
    handle: { type: Number },
    userId: { type: String },
    billingEmail: { type: String },
    billingName: { type: String },
    billingCompany: { type: String },
    billingAddress: { type: String },
    billingCity: { type: String },
    billingPostCode: { type: String },
    billingState: { type: String },
    billingCountry: { type: String },
    shippingName: { type: String },
    shippingCompany: { type: String },
    shippingAddress: { type: String },
    shippingCity: { type: String },
    shippingPostCode: { type: String },
    shippingState: { type: String },
    shippingCountry: { type: String },
    shippingDate: { type: Date },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

//Here we wrap the Schema with model
//'Order' is the name of the given Collection
//And a reference to the given 'Schema'
const raahandel = mongoose.model('order', raahandelSchema)
module.exports = raahandel;