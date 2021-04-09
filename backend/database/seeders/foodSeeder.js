const Fooditem = require('../models/fooditem');
const mongoose = require('mongoose');

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

