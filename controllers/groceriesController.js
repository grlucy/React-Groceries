const Item = require("../models");

exports.itemsByCategory = (req, res) => {
  Item.find({ category: req.params.category }).exec((err, items) => {
    if (err || !items) {
      return res.status(400).json({
        error: "No items found for category",
      });
    }
    res.json({ items });
  });
};

exports.createItem = (req, res) => {
  const newItem = new Item(req.body);
  console.log("newItem: ", newItem);
  newItem.save((err, item) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({ item });
  });
};

exports.deleteItem = (req, res) => {
  Item.deleteOne({ _id: req.params.id }).exec((err, item) => {
    if (err || !item) {
      return res.status(400).json({
        error: "No item found for that id",
      });
    }
    res.json({ deleted: item });
  });
};
