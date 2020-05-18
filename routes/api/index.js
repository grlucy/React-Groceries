const router = require("express").Router();

const {
  itemsByCategory,
  createItem,
  deleteItem,
} = require("../../controllers/groceriesController");

// Get groceries by category
router.get("/groceries/:category", itemsByCategory);

// Add a grocery item
router.post("/groceries", createItem);

// Delete a specific item
router.delete("/groceries/:id", deleteItem);

module.exports = router;
