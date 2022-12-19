import ResultsPage from '../ResultsPage/ResultsPage';
import {useState, useEffect} from 'react'
import * as foodsApi from '../../utilities/foods-api'
import * as usersApi from '../../utilities/users-api'

export default function TrackFood() {
  const [formData, setFormData] = useState('')
  const [results, setResults] = useState();

  
    async function getFoodItem() {
      console.log('getting food ',formData)
      
      const res = await foodsApi.getFood(formData)
      console.log('getFoodItem results ', results)
      // const data = results.hits && results.hits[0]
      setResults(res.hits[0])
    }
//  })
  function handleSubmit(evt){
    evt.preventDefault()
    getFoodItem()
  }; 

  async function submitFoodItem() {
    console.log('submitting food ',formData)
    
    const res = await usersApi.submitFoodItem(results.fields)
    console.log('getFoodItem results ', results)
    
    
  }

  async function handleLogItem(evt){
    evt.preventDefault()
    await submitFoodItem(formData)
    setFormData('')
    setResults()
  }
  
  useEffect(() => {
    console.log('results changed ', results)
  }, [results])


  return (
    <>
    <h1>Track your food</h1>
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="search" 
      value={formData} 
      onChange={(evt) => setFormData(evt.target.value)}/>

    <button type='submit'>Submit</button>
    </form>


    { results && (
      <ul>
 <h1> Results: </h1>
      <li key={1}>'Name of food: '<p>{results.fields.item_name}</p></li>
      <li key={2}><p> 'Calories: '</p> <p>{results.fields.nf_calories}</p></li>
      <button onClick={handleLogItem}>log item</button>
      </ul>

     
    )}

    </>
  );
}
