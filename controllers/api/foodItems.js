const FoodItem = require('../../mdoels/foodItem');

module.exports = {
  create,
  
};

async function create(req, res) {
    console.log('creste food items calleds')
  try {
    // Add the user to the db
    const foodItem = await FoodItem.create(req.body);
    return res.json(foodItem);
  } catch (err) {
    res.status(400).json(err);
  }
}