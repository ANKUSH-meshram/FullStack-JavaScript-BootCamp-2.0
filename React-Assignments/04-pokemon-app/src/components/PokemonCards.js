import React from 'react';

const PokemonCards = ({id, image, name, type}) => {
    return (
        <div className={type} id="card-container">
            <div className='number '>
                <small className=''>#0{id}</small>
            </div>

            <img src={image} alt={name} className=""/>

            <div className="detail-wrapper ">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>

        </div>
    );
};

export default PokemonCards;