const mongoose = require("mongoose");
const Item = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/groceries");

const grocerySeed = [
  { category: "Refrigerated", name: "Milk", status: false },
  { category: "Refrigerated", name: "Yogurt", status: false },
  { category: "Refrigerated", name: "Potstickers", status: false },
  { category: "Produce", name: "Bananas", status: false },
  { category: "Produce", name: "Broccoli", status: false },
  { category: "Produce", name: "Tomatoes", status: false },
  { category: "Meats", name: "Chicken breasts", status: false },
  { category: "Meats", name: "Lobster", status: false },
  { category: "Meats", name: "Deli turkey", status: false },
  { category: "Dry Goods", name: "Crispix", status: false },
  { category: "Dry Goods", name: "Chicken noodle soup", status: false },
  { category: "Dry Goods", name: "Mike & Ikes", status: false },
  { category: "Other", name: "Mouthwash", status: false },
  { category: "Other", name: "Toilet paper", status: false },
  { category: "Other", name: "Cat litter", status: false },
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
