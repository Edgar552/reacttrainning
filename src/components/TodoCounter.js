import React from "react";

function TodoCounter({totalPokemons,completedPokemons} ){
    return (
        <React.Fragment>
            <h1 className="TodoCounter">Pokedex</h1>
            <h2 className="TodoCounter">Has Capturado {completedPokemons} de {totalPokemons} Pokemons</h2>
        </React.Fragment>

    );
}
export {TodoCounter};