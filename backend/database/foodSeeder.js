const Fooditem = require('./models/fooditem');

//seed a load of foods if they dont already exist/or user has deleted the base ones
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

function seedFood() {
    Fooditem.countDocuments((err, count) => {
        if (err) {
            console.error(err);
            return;
        }
        if (count < fooditems.length) {
            console.log('deleting old food items');
            //delete all foods in db
            Fooditem.deleteMany({}).then(() => {
                console.log('populating db with updated food items');
                //go through fooditems and save each one
                fooditems.forEach((food) => {
                    food.save().catch(err => console.error(err));
                });
                console.log('Generated new food items.');
            })
        }
    });
}

module.exports = {seedFood};