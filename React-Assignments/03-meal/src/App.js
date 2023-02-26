import React from 'react';
import './components/Style.css'
import Meal from './components/Meal';
import Recipe from './components/Recipe';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    
      <Routes>
        <Route  path="/" element={<Meal/>}/>
        <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>

      
      <footer className='footer text-center text-sm w-full'>
        <h3 className=" bg-[#0000005a] text-[#c2880b7b] font-['Oleo_Script'] text-lg tracking-wider p-1">la Ricetta</h3>

        <p className="font-['Oleo_Script'] bg-[#0000005a] text-[#ffffff7b] pb-2">Made with <i className="fa-regular fa-heart text-[#bd2626] mx-1 hover:animate-pulse cursor-pointer bg-transparent"></i> by 
          <a target="_blank" className="text-[#224bba] mx-1 bg-transparent" 
          href="https://github.com/ANKUSH-meshram" rel="noreferrer"> aankuushhh</a>
        </p>
    </footer>
    </>
  )
}

export default App;