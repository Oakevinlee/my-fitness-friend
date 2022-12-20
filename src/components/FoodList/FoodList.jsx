
import { useEffect, useState } from "react";
import * as foodsApi from '../../utilities/foods-api';
export default function FoodList({foods, setFoods}) {
    let total = 0;
 
    
    const totalCalories = foods && foods.forEach(calorie =>(
         total += calorie.calories
        
    ))
    
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
        <div>
            <p>{f.name}</p>
            <p>{f.calories}</p>
        </div>
    ))
   }
    </>
  );
}