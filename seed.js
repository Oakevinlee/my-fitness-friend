require('dotenv').config();
require('./config/database');

const ROOT_URL = 'https://api.nutritionix.com/v1_1/search';
const Food = require('./models/food');
