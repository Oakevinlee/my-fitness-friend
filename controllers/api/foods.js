const Food = require('../../models/food')
const apiKey = process.env.API_KEY
const baseUrl = 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1'

module.exports = {
    getFood,
};

async function getFood(req, res) {
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
        console.log('foods ', foods)
        return res.json(foods)

    } catch (err) {
        res.json(err)
    }

    
}


