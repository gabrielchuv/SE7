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

// URL - Restful API CRRUD
//get a bin
app.get('/bin', (req, res) => {
    bin.find({})
        .then(bin => res.send(bin))
        .catch((error) => console.log(error));
})

//add food item to the bin
app.post('/bin', (req, res) => {
    //create new food item with given parameters
    (new bin({ 'id': req.body.id }))
        .save()
        .then((bin) => res.send(bin))
        .catch((error) => console.log(error));
})


//connect server to local host port 3000 and print to console
app.listen(3000, () => console.log("Server is connected on Port 3000"));