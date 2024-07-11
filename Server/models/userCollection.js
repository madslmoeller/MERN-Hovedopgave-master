const mongoose = require('mongoose');

const raahandelSchema = new mongoose.Schema({
    //User
    id: { type: String },
    name: { type: String },
    role: { type: String },

});

const raahandel = mongoose.model('user', raahandelSchema)
module.exports = raahandel;