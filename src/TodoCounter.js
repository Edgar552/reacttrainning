import React from "react";

function TodoCounter({total, completed}){
     
    return (
        <React.Fragment>
            <h1 className="TodoCounter">Pokedex</h1>
            <h2 className="TodoCounter">Has Atrapado {completed} de {total} Pokemons</h2>
        </React.Fragment>

    );
}

export {TodoCounter};