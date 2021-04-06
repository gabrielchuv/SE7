const express = require('express');         //link express
const app = express();                      //create an express server
const mongoose = require('./database/mongoose');    //link mongoose

const bin = require('./database/models/bin');
const fooditem = require('./database/models/fooditem');

//parse JSON data
app.use(express.json());

//CORS magic
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
    next();
})

// RESTFUL API FOR BIN
//CREATE a bin
app.post('/bin', (req, res) => {
    //create new food item with given parameters
    (new bin({ 'usrID': req.body.usrID, 'food': req.body.food, 'quantity': req.body.quantity }))
        .save()
        .then((bin) => res.send(bin))
        .catch((error) => console.log(error));
});

//READ all bins
app.get('/bin', (req, res) => {
    bin.find({})
        .then((bin) => res.send(bin))
        .catch((error) => console.log(error));
});

//READ A bin
app.get('/bin/:id', (req, res) => {
    bin.find({ 'usrID': req.params.id })
        .then((bin) => res.send(bin))
        .catch((error) => console.log(error));
});

//update a bin (patch as following RESTfull), $set automatically matches values
app.patch('/bin/:usrid/:id', (req, res) => {
    //$set to automatically set each field
    bin.findOneAndUpdate({ 'usrID': req.params.usrid, '_id': req.params.id }, { $set: req.body })
        .then((bin) => res.send(bin))
        .catch((error) => console.log(error));
});

//DELETE ALL bins (FOR EASY DEBUGGING)
app.delete('/bin/deleteall', (req, res) => {
    bin.deleteMany({})
        .then(bin => res.send(bin))
        .catch((error) => console.log(error));
});

//DELETE A bin
app.delete('/bin/:id', (req, res) => {
    bin.deleteMany({ 'usrID': req.params.id })
        .then(bin => res.send(bin))
        .catch((error) => console.log(error));
});

// RESTFUL API FOR FOOD ITEMS http://localhost:3000/search/foods/:foodname
// CREATE a food item
app.post('/search/foods/create', (req, res) => {
    (new fooditem({ 'name': req.body.name, 'mass': req.body.mass, 'cost': req.body.cost, 'category': req.body.category }))
        .save()
        .then((fooditem) => res.send(fooditem))
        .catch((error) => console.log(error));
});

//READ ALL FOOD ITEMS
app.get('/search/foods/all', (req, res) => {
    fooditem.find({})
        .then((fooditem) => res.send(fooditem))
        .catch((error) => console.log(error));
});

//READ A FOOD ITEM
app.get('/search/foods/:foodname', (req, res) => {
    fooditem.findOne({ 'name': req.params.foodname })
        .then((fooditem) => res.send(fooditem))
        .catch((error) => console.log(error));
});

//UPDATE A FOOD ITEM
app.patch('/search/foods/:foodname', (req, res) => {
    fooditem.findOneAndUpdate({ 'name': req.params.foodname }, { $set: req.body })
        .then((fooditem) => res.send(fooditem))
        .catch((error) => console.log(error));
});

//DELETE A FOOD ITEM
app.delete('/search/foods/delete/:foodname', (req, res) => {
    fooditem.findOneAndDelete({ 'name': req.params.foodname })
        .then((fooditem) => res.send(fooditem))
        .catch((error) => console.log(error));
});


//connect server to local host port 3000 and print to console
app.listen(3000, () => console.log("Server is connected on Port 3000"));