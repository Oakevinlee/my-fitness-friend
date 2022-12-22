import { useEffect, useState } from "react";
import * as foodsApi from '../../utilities/foods-api';
export default function FoodList({foods, setFoods}) {
    let total = 0;
 
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
  
    return (
    <>
    <h1 className="food-total">{total.toFixed(2)} calories</h1>
   {
    foods && foods.map((f, idx) =>(
        <div className="food-result" key={idx}>
            <p className="result-list">{f.name}</p>
            <p className="result-list">{f.calories} calories</p>
            <button className="food-delete" onClick={() => handleDelete(f._id)}>delete</button>
        </div>
    ))
   }
   </>
  );
}