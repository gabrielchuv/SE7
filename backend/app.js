const express = require('express');         //link express
const app = express();                      //create an express server
const http = require('http');
const path = require('path');
const api = require('./api');
const db = require('../db');
const foodSeeder = require('./database/foodSeeder');

//parse JSON data
app.use(express.json());

//CORS magic
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
    next();
})

// Point static path to dist (folder where build files are located)
app.use(express.static(path.join(__dirname, '../frontend/dist/frontend')));

app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html'));
});

//
const port = process.env.PORT || '3000';
app.set('port', port);

// creates the http server on the local machine
const server = http.createServer(app);

//binds and listens for the connections on the specified port
app.listen(port, () => console.log(`Express Server is connected on Port ${port}`));

//seed food items if needed
foodSeeder.seedFood();
