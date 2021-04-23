const mongoose = require('./backend/node_modules/mongoose');
//below needed to get hints/intellisense for mongoose commands, above is needed for actual mongoose operation
//const mongoose = require('mongoose');
/* SEMI NEW */
/*const url = `mongodb+srv://gabrielchuv:qZ7nKcff5pLb67vQ@food-waste-app.esxbd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;*/
/* NEW NEW  */
/*const url = process.env.MONGODB_URI;*/
/* NEW */
/*const options={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}*/


const Fooditem = require('./backend/database/models/fooditem');
const Bin = require('./backend/database/models/bin');

var collectionArray = new Array();

/* OLD */
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

/* OLD */
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

/* OLD */
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options).
    then(() => { console.log('MongoDB is connected') })
    .catch((err) => { console.log(err) });
