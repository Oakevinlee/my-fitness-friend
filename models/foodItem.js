const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const foodItemsSchema = new Schema({
  name: {type: String, required: true},
  
  foodLogid: {type: Number, required: true},

  calories: {type: Number, required: true},

  quantitiy: {type: Number, required: true}
  
  
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      return ret;
    }
  }
});

module.exports = mongoose.model('FoodItem', foodItemSchema);