const express = require('express');
const router = express.Router();

const bin = require('./database/models/bin');
const fooditem = require('./database/models/fooditem');

// RESTFUL API FOR BIN http://localhost:3000/api/bin/...
router.post('/bin/create', (req, res) => {
    //create new food item with given parameters
    (new bin({ 'usrID': req.body.usrID, 'food': req.body.food, 'quantity': req.body.quantity }))
        .save()
        .then((bin) => res.send(bin))
        .catch((error) => console.log(error));
});

//READ all bins
router.get('/bin/all', (req, res) => {
    bin.find({})
        .then((bin) => res.send(bin))
        .catch((error) => console.log(error));
});

//READ A bin
router.get('/bin/:id', (req, res) => {
    bin.find({ 'usrID': req.params.id })
        .then((bin) => res.send(bin))
        .catch((error) => console.log(error));
});

//update a bin (patch as following RESTfull), $set automatically matches values
router.patch('/bin/:usrid/:id', (req, res) => {
    //$set to automatically set each field
    bin.findOneAndUpdate({ 'usrID': req.params.usrid, '_id': req.params.id }, { $set: req.body })
        .then((bin) => res.send(bin))
        .catch((error) => console.log(error));
});

//DELETE ALL bins (FOR EASY DEBUGGING)
router.delete('/bin/deleteall', (req, res) => {
    bin.deleteMany({})
        .then(bin => res.send(bin))
        .catch((error) => console.log(error));
});

//DELETE A bin
router.delete('/bin/:id', (req, res) => {
    bin.deleteMany({ 'usrID': req.params.id })
        .then(bin => res.send(bin))
        .catch((error) => console.log(error));
});

// RESTFUL API FOR FOOD ITEMS http://localhost:3000/api/search/foods/:foodname
// CREATE a food item
router.post('/search/foods/create', (req, res) => {
    (new fooditem({ 'name': req.body.name, 'mass': req.body.mass, 'cost': req.body.cost, 'category': req.body.category }))
        .save()
        .then((fooditem) => res.send(fooditem))
        .catch((error) => console.log(error));
});

//READ ALL FOOD ITEMS
router.get('/search/foods/all', (req, res) => {
    fooditem.find({})
        .then((fooditem) => res.send(fooditem))
        .catch((error) => console.log(error));
});

//READ A FOOD ITEM
router.get('/search/foods/:foodname', (req, res) => {
    fooditem.findOne({ 'name': req.params.foodname })
        .then((fooditem) => res.send(fooditem))
        .catch((error) => console.log(error));
});

//UPDATE A FOOD ITEM
router.patch('/search/foods/:foodname', (req, res) => {
    fooditem.findOneAndUpdate({ 'name': req.params.foodname }, { $set: req.body })
        .then((fooditem) => res.send(fooditem))
        .catch((error) => console.log(error));
});

//DELETE A FOOD ITEM
router.delete('/search/foods/delete/:foodname', (req, res) => {
    fooditem.findOneAndDelete({ 'name': req.params.foodname })
        .then((fooditem) => res.send(fooditem))
        .catch((error) => console.log(error));
});

module.exports = router;
