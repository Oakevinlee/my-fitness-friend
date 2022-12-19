const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodItemsSchema = new Schema({
  name: {type: String, required: true},

  calories: {type: Number, required: true},

  quantity: {type: Number, required: true},
  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  
  
}, {
  timestamps: true, 
});

module.exports = mongoose.model('FoodItem', foodItemsSchema);