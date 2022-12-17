const express = require('express');
const router = express.Router();
const foodsItems = require('../../controllers/api/foodItems');

router.get('/getFood', foodsItems.create);


module.exports = router;