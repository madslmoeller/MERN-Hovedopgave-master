const mongoose = require('mongoose');

const raahandelSchema = new mongoose.Schema({
    //OrderLineList
    id: { type: String },
    productId: { type: String },
    title: { type: String },
    type: { type: String },
    unit: { type: String },
    unitSize: { type: Number },
    bulkUnit: { type: String },
    bulkSize: { type: Number },
    price: { type: Number },
    quantity: { type: Number },

});

const raahandel = mongoose.model('orderLineList', raahandelSchema)
module.exports = raahandel;