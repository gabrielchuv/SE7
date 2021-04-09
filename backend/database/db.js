const mongoose = require('mongoose');
const { collection } = require('./models/bin');

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options).
    then(() => { console.log('MongoDB is connected') })
    .catch((err) => { console.log(err) });

//check if collections exist
//on connection open - https://stackoverflow.com/questions/13444876/node-js-mongoose-check-if-a-collection-exists
mongoose.connection.on('open', () => {
    mongoose.connection.db.listCollections({ name: 'fooditems' }).toArray((err, collectionNames) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("collection names: ");
        console.log(collectionNames);
    })
})
//populate collections

//