import React from "react";

function TodoCounter({totalPokemons,completedPokemons, loading} ){
    return (
        <React.Fragment>
            <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading" }`}>Pokedex</h1>
            <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading" }`}>Has Capturado {completedPokemons} de {totalPokemons} Pokemons</h2>
        </React.Fragment>

    );
}
export {TodoCounter};