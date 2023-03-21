import React, { useEffect, useState } from 'react';
import PokemonCards from './PokemonCards';
import SearchPokemon from './SearchPokemon';

const Hero = () => {
    const [allPokemon, setAllPokemon] = useState([])
    const [loadmore, setLoadmore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const res = await fetch(loadmore);
        const data = await res.json();

        setLoadmore(data.next);

        function createPokemonObject (results) {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemon(currentList => [...currentList, data])
                await allPokemon.sort((a, b) => a.id - b.id)
            });
        }
        createPokemonObject(data.results)
    }
    useEffect(() => {
        getAllPokemons()
    },[])

    return (
        <div className='Hero flex flex-col items-center justify-center min-h-[100vh] py-[3rem] px-[5rem] mt-[5%]'>

            <SearchPokemon/>

            <div className='pokemon-container flex flex-col items-center justify-center mt-6'>

                <div className='all-container flex flex-wrap items-center justify-center'>
                    {allPokemon.map((pokemonStats, index) => 
                        <PokemonCards
                            key={index}
                            id={pokemonStats.id}
                            image={pokemonStats.sprites.other.dream_world.front_default}
                            name={pokemonStats.name}
                            type={pokemonStats.types[0].type.name}
                        />
                    )}
                </div>
                <button className='load-more'
                    onClick={() => getAllPokemons()}
                >
                    Load More
                </button>
            </div>
        </div>
    );
};

export default Hero;