const router = require("express").Router();

const { itemsByCategory } = require("../../controllers/groceriesController");

// Get groceries by category
router.get("/groceries/:category", itemsByCategory);

module.exports = router;
