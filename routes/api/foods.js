const express = require('express');
const router = express.Router();
const foodsCtrl = require('../../controllers/api/foods');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/getFood', foodsCtrl.getFood);
router.get('/new', foodsCtrl.getAll);
router.delete('/:id', foodsCtrl.deleteFood);

 
module.exports = router;