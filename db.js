const mongoose = require('./backend/node_modules/mongoose');
/* SEMI NEW */
const url = `mongodb+srv://gabrielchuv:qZ7nKcff5pLb67vQ@food-waste-app.esxbd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
/* NEW NEW  */
/*const url = process.env.MONGODB_URI;*/
/* NEW */
const options={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}


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
        cost: "1.60",
        category: "fish"
    }),
    new Fooditem({
        name: "tomato",
        mass: "15",
        cost: "0.08",
        category: "vegetable"
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
    new Fooditem({
        name: "avocado",
        mass: "12",
        cost: "1.00",
        category: "vegetable"
    }),
    new Fooditem({
        name: "berries (1 pack)",
        mass: "12",
        cost: "2.50",
        category: "fruit"
    }),
    new Fooditem({
        name: "peach",
        mass: "12",
        cost: "0.70",
        category: "fruit"
    }),
    new Fooditem({
        name: "mushroom (1 pack)",
        mass: "12",
        cost: "1.90",
        category: "vegetable"
    }),
    new Fooditem({
        name: "broccoli",
        mass: "12",
        cost: "0.50",
        category: "vegetable"
    }),
    new Fooditem({
        name: "asparagus (1 pack)",
        mass: "12",
        cost: "2.00",
        category: "vegetable"
    }),
    new Fooditem({
        name: "ham (1 pack)",
        mass: "12",
        cost: "2.50",
        category: "meat"
    }),
    new Fooditem({
        name: "milk",
        mass: "12",
        cost: "1.20",
        category: "dairy"
    }),
    new Fooditem({
        name: "sea bass fillet",
        mass: "12",
        cost: "2.10",
        category: "meat"
    }),
    new Fooditem({
        name: "plum",
        mass: "12",
        cost: "0.50",
        category: "fruit"
    }),
    new Fooditem({
        name: "apple",
        mass: "12",
        cost: "0.62",
        category: "fruit"
    }),
    new Fooditem({
        name: "kiwi",
        mass: "12",
        cost: "0.30",
        category: "fruit"
    }),
    new Fooditem({
        name: "melon",
        mass: "12",
        cost: "1.80",
        category: "fruit"
    }),
    new Fooditem({
        name: "orange",
        mass: "12",
        cost: "0.30",
        category: "fruit"
    }),
    new Fooditem({
        name: "juice",
        mass: "12",
        cost: "2.00",
        category: "drink"
    }),
    new Fooditem({
        name: "pineapple",
        mass: "12",
        cost: "0.75",
        category: "fruit"
    }),
    new Fooditem({
        name: "cabbage",
        mass: "12",
        cost: "0.50",
        category: "vegetable"
    }),
    new Fooditem({
        name: "celery (1 pack)",
        mass: "12",
        cost: "1.00",
        category: "vegetable"
    }),
    new Fooditem({
        name: "cucumber",
        mass: "12",
        cost: "0.70",
        category: "vegetable"
    }),
    new Fooditem({
        name: "bell pepper",
        mass: "12",
        cost: "0.45",
        category: "vegetable"
    }),
    new Fooditem({
        name: "spinach (1 pack)",
        mass: "12",
        cost: "1.30",
        category: "vegetable"
    }),
    new Fooditem({
        name: "lemon",
        mass: "12",
        cost: "0.30",
        category: "vegetable"
    }),
    new Fooditem({
        name: "bread (1 loaf)",
        mass: "12",
        cost: "1.00",
        category: "grains"
    }),
    new Fooditem({
        name: "hummus",
        mass: "12",
        cost: "1.40",
        category: "fruit"
    }),
    new Fooditem({
        name: "yogurt",
        mass: "12",
        cost: "2.00",
        category: "dairy"
    }),
    new Fooditem({
        name: "zuchinni",
        mass: "12",
        cost: "0.40",
        category: "vegetable"
    }),
    new Fooditem({
        name: "minced beef",
        mass: "12",
        cost: "2.50",
        category: "meat"
    }),
    new Fooditem({
        name: "prawns",
        mass: "12",
        cost: "4.00",
        category: "meat"
    }),
    new Fooditem({
        name: "haddock fillet",
        mass: "12",
        cost: "2.00",
        category: "meat"
    }),
    new Fooditem({
        name: "cod fillet",
        mass: "12",
        cost: "2.50",
        category: "meat"
    }),
    new Fooditem({
        name: "sausage",
        mass: "12",
        cost: "1.00",
        category: "meat"
    })
];

//check if food collections exist
//on connection open - https://stackoverflow.com/questions/13444876/node-js-mongoose-check-if-a-collection-exists
mongoose.connection.on('open', () => {
    mongoose.connection.db.listCollections(/*{ name: 'fooditems' }*/).toArray((err, collectionNames) => {
        if (err) {
            console.error(err);
            return;
        }
        this.collectionArray = collectionNames;
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
        }
    })
    /* remove existing food items, and add all food items  */
    //compare length of pre-populated food items list to food items collection running in container
    //if container has less that pre-populated, delete the fooditems collection and make new with pre-populated items
})
