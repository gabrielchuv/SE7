const mongoose = require('./backend/node_modules/mongoose');
const Fooditem = require('./backend/database/models/fooditem');
const Bin = require('./backend/database/models/bin');

var collectionArray = new Array();

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

// fooditems collection to prepopulate database if loading for the first time
const fooditems = [
    new Fooditem({
        name: "steak",
        mass: "400",
        cost: "4.50",
        category: "meat"
    }),
    new Fooditem({
        name: "banana",
        mass: "80",
        cost: "0.13",
        category: "fruit"
    }),
    new Fooditem({
        name: "carrot",
        mass: "20",
        cost: "0.23",
        category: "vegetable",
    }),
    new Fooditem({
        name: "egg",
        mass: "100",
        cost: "0.23",
        category: "egg"
    }),
    new Fooditem({
        name: "potato",
        mass: "200",
        cost: "0.23",
        category: "vegetable"
    }),
    new Fooditem({
        name: "chicken leg",
        mass: "200",
        cost: "0.83",
        category: "poultry"
    }),
    new Fooditem({
        name: "chicken breast",
        mass: "200",
        cost: "1.00",
        category: "poultry"
    }),
    new Fooditem({
        name: "salmon fillet",
        mass: "100",
        cost: "1.50",
        category: "fish"
    }),
    new Fooditem({
        name: "tomato",
        mass: "15",
        cost: "0.08",
        category: "fruit"
    }),
    new Fooditem({
        name: "grape",
        mass: "12",
        cost: "0.13",
        category: "fruit"
    }),
    new Fooditem({
        name: "strawberry",
        mass: "12",
        cost: "0.10",
        category: "fruit"
    }),
];

//check if collections exist
//on connection open - https://stackoverflow.com/questions/13444876/node-js-mongoose-check-if-a-collection-exists
mongoose.connection.on('open', () => {
    mongoose.connection.db.listCollections(/*{ name: 'fooditems' }*/).toArray((err, collectionNames) => {
        if (err) {
            console.error(err);
            return;
        }
        this.collectionArray = collectionNames;
        console.log("Collections detected: ");
        console.log(this.collectionArray);
        //if there are no collection names in db, fooditems collection needs to be created to populate db with foods
        if (!this.collectionArray.length) {
            //generate a food items collection in mongoDB container
            console.log("No fooditems collection detected, generating them ... ");
            for (var i = 0; i < fooditems.length; i++) {
                fooditems[i].save((err) => {
                    if (err) {
                        console.error(err);
                    }
                });
                console.log(`populating db with: ${fooditems[i].name}`);
            }

            //TODO create bins collection? might do it automatically when saving the first document with createBin
        }
    })
})