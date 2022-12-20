const express = require('express');
const router = express.Router();
const foodsCtrl = require('../../controllers/api/foods');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/getFood', foodsCtrl.getFood);
router.get('/new', foodsCtrl.getAll);

 
module.exports = router;