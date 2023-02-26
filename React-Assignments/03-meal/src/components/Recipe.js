import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
var id="";
const Recipe = () => {
    const [item, setItem] = useState(); 
    const { recipeId } = useParams();
    if (recipeId !==" ") {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`).then(res => res.json()).then(data => {
            setItem(data.meals[0]);  
        })
    }
    if(item){
      const strYoutube= item.strYoutube;
      const str=strYoutube.split("=");
      id=str[str.length-1];
    }
  

    return (
        <>
            {
                (!item) ? "" : 
                <div>
                <div className="content">
                    <div className="left">
                        <div className="inner-content">
                            <img src={item.strMealThumb} alt="" className="z-[-50]"/>
                            <h1>{item.strMeal}</h1>
                            <h3>{item.strArea} Food</h3>
                            <h3><span>Category:</span> {item.strCategory}</h3>
                        </div>
                    </div>
                
                    <div className="recipe-details">
                        <ul className="ingredients">
                            <h3>Ingredients</h3>
                            <li>{item.strIngredient1}:{item.strMeasure1}</li>
                            <li>{item.strIngredient2}:{item.strMeasure2}</li>
                            <li>{item.strIngredient3}:{item.strMeasure3}</li>
                            <li>{item.strIngredient4}:{item.strMeasure4}</li>
                            <li>{item.strIngredient5}:{item.strMeasure5}</li>
                            <li>{item.strIngredient6}:{item.strMeasure6}</li>
                            <li>{item.strIngredient7}:{item.strMeasure7}</li>
                            <li>{item.strIngredient8}:{item.strMeasure8}</li>
                        </ul>
                    </div>
                </div>

                <div className="down">
                <div className="instructions">
                    <h3>Instructions</h3>
                    <h5>{item.strInstructions}</h5>
                </div>

                <div className="video">
                        <iframe width="
                        100%" height="350" title="recipeVideo"
                            src={`https://www.youtube.com/embed/${id}`}>
                        </iframe>
                    </div>
                </div>
                </div>
            }

        </>
    )
}
export default Recipe