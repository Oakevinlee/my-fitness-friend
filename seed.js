require('dotenv').config();
require('./config/database');

// const fetch = require('node-fetch');
const ROOT_URL = 'https://api.nutritionix.com/v1_1/search';
const Food = require('./models/food');

async function getFoods(req, res, next) {
  const data = await fetch(`${ROOT_URL}?`);
  
  for (question of quizData) {
      const exists = await Question.exists({apiId:question.id})
      if (!exists) {
          await Question.create({
              apiId: question.id,
              question: question.question,
              choices: question.answers,
              answer: question.correct_answer,
              tag: question.tags[0].name,
              category: question.category,
              difficulty: question.difficulty
          })
      }
  }
  console.log('Finished!');
}

getQuestions();