const mongoose = require('mongoose');
const fooditem = require('./fooditem');

const BinSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    foods: {
        type: [mongoose.Types.ObjectId]
    } 
});

//create the model base on above scheme
const Bin = mongoose.model('Bin', BinSchema);
//export the model so its available else where
module.exports = Bin;