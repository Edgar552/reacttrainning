import React from "react";
function useLocalStorage(itemName, initialValue){
    const [sincronized, setSincronized]    = React.useState(true);
    const [error, setError]     = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [pokemones, setPokemones]      = React.useState(initialValue);

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
                console.log('Effects funcionando')
                setPokemones((pokemonList));
                setLoading(false);
                setSincronized(true)

            }
            catch (error){
                setError(error);
            }
        },3000);
    },[sincronized]);
    const UpdatePokemons = (updatedList) => {
        const stringifyPokemons = JSON.stringify(updatedList);
        localStorage.setItem(itemName, stringifyPokemons);
        setPokemones(updatedList);
    };

    const sincronize = () =>{
      setLoading(true);
      setSincronized(false);
    };

    return {
        pokemones,
        UpdatePokemons,
        loading,
        error,
        sincronize
    };

}

export {useLocalStorage};