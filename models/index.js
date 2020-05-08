const mongoose, {Schema} = require("mongoose");

const itemSchema = new Schema({
 category: {
  type: String,
  required: true
 },
 name: {
  type: String,
  trim: true,
  required: true
 },
 status: {
  type: Boolean,
  default: false
 }
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;