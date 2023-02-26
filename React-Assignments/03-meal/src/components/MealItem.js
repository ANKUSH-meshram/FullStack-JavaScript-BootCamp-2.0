import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem=({data})=>{
    console.log(data);
    let navigate = useNavigate();

    return(
        <>  
            {
                (!data) ?"Not Found": data.map(item=>{
                    return(
                    <div className="card" 
                    key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>
                        <img src={item.strMealThumb} alt="" />
                        <div className="mealname"><h3>{item.strMeal}</h3></div>
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default MealItem;