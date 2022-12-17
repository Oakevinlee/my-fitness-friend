const Schema = require('mongoose').Schema
const mongoose = require ('mongoose')
const foodSchema = new Schema({
    id: Number,
    name: String,
    amount: Number,
    Nutrition: [{
        type: String

   }],
   user: [{
    type: Schema.Types.ObjectId, ref: 'User'
   }]
});

module.exports = mongoose.model('Food', foodSchema);