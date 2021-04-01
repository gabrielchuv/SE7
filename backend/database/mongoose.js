const mongoose = require('mongoose');   //link mongoose..

mongoose.Promise = global.Promise;  //allows asynchronous operations to stop freezing/waiting on db

//local address to the database, 27071 - port mongo connects to, dontwastefood - name of the db
//deprecation warning hinter to use the config options useNewUrl & useUnified ...
mongoose.connect('mongodb://127.0.0.1:27017/dontwastefood', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

module.exports = mongoose;