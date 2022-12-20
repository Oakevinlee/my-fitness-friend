const Schema = require('mongoose').Schema
const mongoose = require ('mongoose')
const foodSchema = new Schema({
    amount: Number,
    food: [{
        food: String

   }],
   user: [{
    type: Schema.Types.ObjectId, ref: 'User'
   }]
});

module.exports = mongoose.model('Food', foodSchema);