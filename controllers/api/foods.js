const foodItem = require('../../models/foodItem');
const FoodItem = require('../../models/foodItem')
const apiKey = process.env.API_KEY
const baseUrl = 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1'

module.exports = {
    getFood,
    getAll,
    deleteFood
};

async function getFood(req, res) {
    console.log('getting food: :: ')
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1af2a83170msh2f13db84141404cp145d32jsn31ff3b3ff802',
                'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
            }
        }; 
        
        let data = await fetch(`https://nutritionix-api.p.rapidapi.com/v1_1/search/${req.query.q}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat`, options)
        let foods = await data.json()
        
        return res.json(foods)

    } catch (err) {
        res.json(err)
    }

    
}
async function deleteFood(req, res) {
     const foodItem =  await FoodItem.findByIdAndDelete(req.params.id)
     res.json(foodItem)
     
}

async function getAll(req, res) {
    var startOfToday = new Date();
startOfToday.setHours(0,0,0,0);


    const food = await FoodItem.find({"createdAt": { "$gte": startOfToday }})
    res.json(food)
}
