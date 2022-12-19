const express = require('express');
const router = express.Router();
const foodItems = require('../../controllers/api/foodItems');

router.post('/createFoodItemTest', foodItems.create);


module.exports = router;