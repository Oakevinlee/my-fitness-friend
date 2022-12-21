const foodItem = require('../../models/foodItem');
const FoodItem = require('../../models/foodItem');

module.exports = {
  create,
//   delete: deleteFood,
};

async function create(req, res) {
  try {
    const foodItem = await FoodItem.create({user: req.user._id, name: req.body.item_name, calories: req.body.nf_calories, quantity: 1});
    return res.json(foodItem);
  } catch (err) {
    console.log('err ', err)
    res.status(400).json(err);
  }
}

// async function deleteFood(req, res) {
//     const byeFood = await foodItem.findByIdAndDelete(req.params.id);
//     res.json(foodItem);
// }