const express = require('express');
const router = express.Router();
const foodItems = require('../../controllers/api/foodItems');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/createFoodItemTest', foodItems.create);
// router.delete('/:id', ensureLoggedIn, foodItems.delete)


module.exports = router;