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
