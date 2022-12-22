import ResultsPage from '../ResultsPage/ResultsPage';
import {useState, useEffect} from 'react'
import * as foodsApi from '../../utilities/foods-api'
import * as usersApi from '../../utilities/users-api'
import ResultItems from '../../components/ResultItems/ResultItems';
import FoodList from '../../components/FoodList/FoodList';

export default function TrackFood() {
  const [formData, setFormData] = useState('')
  const [results, setResults] = useState();
  const[foods, setFoods] = useState([])

    async function getFoodItem() {
      console.log('getting food ',formData)
      
      const res = await foodsApi.getFood(formData)
      console.log('getFoodItem results ', results)
    
      setResults(res.hits[0])
    }
    
  function handleSubmit(evt){
    evt.preventDefault()
    getFoodItem()
  }; 

  async function submitFoodItem() {
    console.log('submitting food ',formData)
    
    const res = await usersApi.submitFoodItem(results.fields)
    console.log('getFoodItem results ', results)
    setFoods([...foods, res])
    
    
  }

  async function handleLogItem(evt){
    evt.preventDefault()
    await submitFoodItem(formData)
    setFormData('')
    setResults()
  }


  return (
    <>
    <h1 className='track'>Track your food</h1>
    <div className='center-form'>

    <form className='food-submit' onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="search" 
      value={formData} 
      onChange={(evt) => setFormData(evt.target.value)}/>

    <button type='submit'>Submit</button>
    </form>
      </div>


    { results && (
      <ul className='food-list'>
      <h1 className='track'> Results: </h1>
      <li className='pick-food' key={1}>Name of food: <p>{results.fields.item_name}</p></li>
      <li className='pick-food' key={2}><p> Calories: </p> <p>{results.fields.nf_calories}</p></li>
      <button onClick={handleLogItem}>log item</button>
      </ul>



     
    )}
    < FoodList foods ={foods} setFoods={setFoods} />
    </>
  );
}
