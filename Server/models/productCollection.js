const mongoose = require('mongoose');

const raahandelSchema = new mongoose.Schema({
    //Product
    id: { type: String },
    producerId: { type: String },
    title: { type: String },
    type: { type: String },
    image: { type: String },
    category: { type: String },
    unit: { type: String },
    unitSize: { type: Number },
    bulkUnit: { type: String },
    bulkSize: { type: Number },
    price: { type: Number },

});

const raahandel = mongoose.model('product', raahandelSchema)
module.exports = raahandel;