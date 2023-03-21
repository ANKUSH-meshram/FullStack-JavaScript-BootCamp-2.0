import React, { useState } from 'react';

const SearchPokemon = () => {
    const [search,setSearch]=useState();
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const searchPokemon = (event) => {
        setUrl(`'https://pokeapi.co/api/v2/pokemon?${search}`)
    }   

    return (
        <form className='search-pokemon w-[30%] bg-[#b3afaf7c] flex justify-between px-2 py-2 items-center rounded-sm shadow-md shadow-black cursor-pointer'>

            <input
                className='w-full bg-transparent px-2 border-none outline-none text-[#e8e8e8]' 
                type='search' 
                placeholder="Search For the Pokemon"
                onChange={e => setSearch(e.target.value)} onKeyDown={searchPokemon}
            />

            <button className='btn-search'>
                <i className="fa-solid fa-arrow-right"></i>
            </button>

        </form>
    );
};

export default SearchPokemon;