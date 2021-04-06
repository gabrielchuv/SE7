//class is really a wrapper mongoose class to configure to use the right port

const mongoose = require('mongoose');   //link mongoose..

mongoose.Promise = global.Promise;  //allows asynchronous operations to stop freezing/waiting on db

//local address to the database, 27071 - port mongo connects to, dontwastefood - name of the db
//deprecation warning hinted to use the config options useNewUrl & useUnified ...
mongoose.connect('mongodb://127.0.0.1:27017/dontwastefood', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

//export class to allow other classed to import/use it
module.exports = mongoose;