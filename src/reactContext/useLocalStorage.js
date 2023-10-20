import React from "react";
function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [pokemones, setPokemones] = React.useState(initialValue);

    React.useEffect(()=>{
        setTimeout(()=>{
            try{
                // Traemos nuestros Pokemons almacenados
                const localStoragePokemons = localStorage.getItem(itemName);
                let pokemonList;

                if (!localStoragePokemons) {
                    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    pokemonList =initialValue;
                } else {
                    // Si existen TODOs en el localStorage los regresamos como nuestros todos
                    pokemonList = JSON.parse(localStoragePokemons);
                }
                console.log('Effect funcionando')
                setPokemones((pokemonList));
                setLoading(false);

            }
            catch (error){
                setError(error);
            }
        },3000);
    },[]);
    const UpdatePokemons = (updatedList) => {
        const stringifyPokemons = JSON.stringify(updatedList);
        localStorage.setItem(itemName, stringifyPokemons);
        setPokemones(updatedList);
    };
    return {
        pokemones,
        UpdatePokemons,
        loading,
        error
    };

}

export {useLocalStorage};