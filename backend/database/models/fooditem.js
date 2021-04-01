const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mass: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    date: {
        type: Date,
        required: true
    }
})

//create the model base on above scheme
const fooditem = mongoose.model('fooditem', FoodItemSchema);
//export the model so its available else where
module.exports = fooditem;