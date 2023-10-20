import React from "react";
import {useLocalStorage} from "./useLocalStorage";
//Ya no es un React Context si no un custom Hook
function usePokemons(){

    const {pokemones, UpdatePokemons, loading,error} = useLocalStorage('TODOS_V1',[]);
    // El estado de nuestra búsqueda
    const [searchValue, setSearch] = React.useState('');
    //Cantidad total de todos los pokemos atrapados (aquellos true)
    const completedPokemons = pokemones.filter(pokemones => pokemones.completed).length;
    //Retorna la cantidad total dentro de nuestro state "pokemones"
    const totalPokemons = pokemones.length;
    //Estado del Modal
    const [openModal, setOpenModal] = React.useState(false);



    let searchedPokemons = [];
    // ! = negativo !! = Positivo, por lo tanto
    //Si la cantidad de elementos dentro de nuestra busqueda NO es mayor o igual a 1 entonces
    //regresa nuestra lista general de pokemons
    if(!searchValue.length >= 1){
        searchedPokemons = pokemones;
    }else{
        //si ya ingresamos algun caracter comenzara a filtrar
        searchedPokemons = pokemones.filter(pokemon => {
            const pokemonText = pokemon.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return pokemonText.includes(searchText);
        });
    }

    const addPokemons =(text)=>{
        const newPokeList = [...pokemones];
        newPokeList.push({
            completed:false,
            text});
        UpdatePokemons(newPokeList);
    }

    const cachedPokemons =(text)=>{
        const pokemonIndex = pokemones.findIndex(pokemon => pokemon.text === text);
        const newPokeList = [...pokemones];
        newPokeList[pokemonIndex].completed = true;
        UpdatePokemons(newPokeList);
    }

    const uncachedPokemons =(text)=>{
        const pokemonIndex = pokemones.findIndex(pokemon => pokemon.text === text);
        const newPokeList = [...pokemones];
        newPokeList.splice(pokemonIndex,1);
        UpdatePokemons(newPokeList);
    }

    return{
        error,
        loading,
        searchedPokemons,
        cachedPokemons,
        uncachedPokemons,
        openModal,
        setOpenModal,
        totalPokemons,
        completedPokemons,
        setSearch,
        searchValue,
        addPokemons};
}
// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { usePokemons };