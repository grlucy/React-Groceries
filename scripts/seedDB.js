const mongoose = require("mongoose");
const Item = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/groceries");

const grocerySeed = [
  { category: "Refrigerated", name: "Milk" },
  { category: "Refrigerated", name: "Yogurt" },
  { category: "Refrigerated", name: "Potstickers" },
  { category: "Produce", name: "Bananas" },
  { category: "Produce", name: "Broccoli" },
  { category: "Produce", name: "Tomatoes" },
  { category: "Meats", name: "Chicken breasts" },
  { category: "Meats", name: "Lobster" },
  { category: "Meats", name: "Deli turkey" },
  { category: "Dry Goods", name: "Crispix" },
  { category: "Dry Goods", name: "Chicken noodle soup" },
  { category: "Dry Goods", name: "Mike & Ikes" },
  { category: "Other", name: "Mouthwash" },
  { category: "Other", name: "Toilet paper" },
  { category: "Other", name: "Cat litter" },
];

Item.deleteMany({}, function (err) {})
  .then(() => Item.collection.insertMany(grocerySeed))
  .then((data) => {
    console.log(data.result.n + " grocery records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
