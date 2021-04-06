//backend models describe the different documents expected to be inputted to the BIN collection (table)
const mongoose = require('mongoose');   //instantiat a mongoose object to access the mongoose library/methods

//like bin, types are all Strings as mongoose cant deal with floating point numbers, mass? and cost will require parsing
//possibly need to add a volume for liquid food items e.g. milk (or just change mass to be generic like 'amount')
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