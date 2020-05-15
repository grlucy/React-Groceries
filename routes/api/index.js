const router = require("express").Router();

const {
  itemsByCategory,
  createItem,
} = require("../../controllers/groceriesController");

// Get groceries by category
router.get("/groceries/:category", itemsByCategory);

// Add a grocery item
router.post("/groceries", createItem);

module.exports = router;
