const mongoose = require('mongoose');
const fooditem = require('./fooditem');

//types all string as mongoose cannot deal with floating point numbers so will need to parse server side
const BinSchema = new mongoose.Schema({
    food: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

//create the model base on above scheme
const Bin = mongoose.model('Bin', BinSchema);
//export the model so its available else where
module.exports = Bin;