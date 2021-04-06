//backend models describe the different documents expected to be inputted to the BIN collection (table)
const mongoose = require('mongoose');   //instantiate a mongoose object to access the mongoose library/methods

//type is all strings as mongoose cannot deal with floating point numbers so will need to parse server side
const BinSchema = new mongoose.Schema({
    usrID: {
        type: String,
        required: true
    },
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

//create a model based on above scheme
const Bin = mongoose.model('Bin', BinSchema);
//export the model so its available else where
module.exports = Bin;