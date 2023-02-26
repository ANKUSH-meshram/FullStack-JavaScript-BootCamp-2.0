import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";

const Meal = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
    },[url])

    const searchRecipe=(evt)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
return (
    <>
        <div className="main">
            <div className="heading">
                <h1 className="font-['Oleo_Script'] text-center text-5xl mt-16 text-[#c48f0a]"
                >Search for Your Meal</h1>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar my-4 bg-[#474646] w-96 h-10 border-none rounded-full p-4 outline-none text-[#c4b8b8] text-md shadow-md shadow-[#000000]" 
                placeholder="Enter the name of meal..."
                onChange={e=> setSearch(e.target.value)} onKeyDown={searchRecipe}/>
            </div>
            <div className="container ">
                {
                    show ?<MealItem data={item} /> :"Not Found"
                
                }
            </div>
        </div>
    </>
)
}
export default Meal;