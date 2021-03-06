const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: {
    type: String,
    required: true,
    enum: ["Produce", "Meats", "Dry Goods", "Refrigerated", "Other"],
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
