const Food = require('../../models/food')
var fetch = require("node-fetch")
const apiKey = process.env.API_KEY
const baseUrl = 'https://api.spoonacular.com/food/search?query='

module.exports = {
    getFood,
}

async function getFood(req, res) {
    let foods = await fetch(`https://api.spoonacular.com/food/search?query=apple&number=1&apiKey=36ab365c911e40acbbf164842e09c676=${req.body.value}`).then((response) => response.json());
    res.json(food.searchResults)
    
}


console.log(getFood())