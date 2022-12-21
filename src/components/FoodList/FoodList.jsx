import { useEffect, useState } from "react";
import * as foodsApi from '../../utilities/foods-api';
export default function FoodList({foods, setFoods}) {
    let total = 0;
 
    // const[totalCalories, setTotalCalories] = useState(null);
    // // useEffect(() => {
    // //     function getTotalCalories(){
    // //         const totalCalories = foods.forEach(calorie =>(
    // //             total += calorie.calories
    // //         ))
    // //         setTotalCalories(totalCalories);
    // //     }
    // //     getTotalCalories();
    // // }, [foods, calorie])
 
    const totalCalories = foods && foods.forEach(calorie =>(
         total += calorie.calories
        
    ))
    
    async function handleDelete(id) {
        const food = await foodsApi.deleteFoodItem(id);
        const newFoodArray = foods.filter(f =>f._id !== food._id)
        setFoods(newFoodArray)

      }

        useEffect(function(){
       async function getAllFoods(){
        const food = await foodsApi.getAll()
        setFoods(food)
       } 
       getAllFoods()
    },[])
    console.log(foods)
    return (
    <>
    <h1>{total}</h1>
   {
    foods && foods.map((f, idx) =>(
        <div key={idx}>
            <p>{f.name}</p>
            <p>{f.calories}</p>
            <button onClick={() => handleDelete(f._id)}>delete</button>
        </div>
    ))
   }


   
    </>
  );
}