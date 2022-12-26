import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import logo from './logo.svg';
//import './App.css';
import './TodoCounter.css'

const pokemonList = [
  {text: 'Pokemon Agua', completed:true},
  {text: 'Pokemon Fuego', completed:false},
  {text: 'Pokemon Electrico', completed:false},
];

function App() {
    // Estado inicial de nuestros pokemons
  const [pokemones, setPokemones] = React.useState(pokemonList);
    // El estado de nuestra búsqueda
  const [searchValue, setSearch] = React.useState('');
  //Cantidad total de todos los pokemos atrapados (aquellos true)
  const completedPokemons = pokemones.filter(pokemon => pokemon.completed).length;
  //Retorna la cantidad total dentro de nuestro state "pokemones"
  const totalPokemons = pokemones.length;



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

const cachedPokemons =(text)=>{
  const pokemonIndex = pokemones.findIndex(pokemon => pokemon.text === text);
  const newPokeList = [...pokemones];
  newPokeList[pokemonIndex].completed = true;
  setPokemones(newPokeList);
}

const uncachedPokemons =(text)=>{
  const pokemonIndex = pokemones.findIndex(pokemon => pokemon.text === text);
  const newPokeList = [...pokemones];
  newPokeList.splice(pokemonIndex,1);
  setPokemones(newPokeList);
}

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalPokemons}
        completed={completedPokemons}
        />    
        <TodoSearch
        searchValue={searchValue}
        setSearch={setSearch}
         />    
          <TodoList>
            {searchedPokemons.map(pokemonList =>(
              <TodoItem 
                key={pokemonList.text} 
                text={pokemonList.text}  
                completed={pokemonList.completed}    
                onComplete={()=>cachedPokemons(pokemonList.text)}
                onDelete={()=>uncachedPokemons(pokemonList.text)}             
                />
              ))}
          </TodoList>
        <TodoButton/>    
    </React.Fragment>

  );
}

export default App;
