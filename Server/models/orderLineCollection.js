const mongoose = require('mongoose');

const raahandelSchema = new mongoose.Schema({
    //OrderLine
    id: { type: String },
    orderId: { type: String },
    orderLineId: { type: String },

});

const raahandel = mongoose.model('orderLine', raahandelSchema)
module.exports = raahandel;