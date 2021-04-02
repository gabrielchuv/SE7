const mongoose = require('mongoose');

//like bin, types are all Strings as mongoose cant deal with floating point numbers, mass? and cost will require parsing
const FoodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mass: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
})

//create the model base on above scheme
const fooditem = mongoose.model('fooditem', FoodItemSchema);
//export the model so its available else where
module.exports = fooditem;