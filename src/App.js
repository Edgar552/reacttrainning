import React from 'react';
import './css/TodoCounter.css'
import './css/appStates.css'
//usePokemons se convierte en un Custom Hook debido a los objetos que exporta
import {usePokemons} from "./reactContext/pokemonContext";
import {PokemonHeader} from "./components/PokemonHeader";
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {ErrorScreen} from "./components/appStates/ErrorScreen";
import {LoadingScreen} from "./components/appStates/LoadingScreen";
import {EmptyScreen} from "./components/appStates/EmptyScreen";
import {TodoItem} from "./components/TodoItem";
import {Modal} from "./components/Modal";
import {PokemonForm} from "./components/PokemonForm";
import {TodoButton} from "./components/TodoButton";

function App() {
    //forma de consumir las propiedades del Hook
    const { error,
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
            addPokemons} = usePokemons();
//toda esta informacion es generada por nuestro custom Hook usePokemons
    return(
        <React.Fragment>
            <PokemonHeader>
                <TodoCounter
                    totalPokemons={totalPokemons}
                    completedPokemons = {completedPokemons}
                />

                <TodoSearch
                    setSearch={setSearch}
                    searchValue={searchValue}/>
            </PokemonHeader>
            {/*TODO list se convierte en un Render Props*/}
            <TodoList
                error       = {error}
                loading     = {loading}
                searchedPk  = {searchedPokemons}

                onError     = {()=><ErrorScreen/>}
                onLoading   = {()=><LoadingScreen/>}
                onEmpty     = {()=><EmptyScreen/>}
                render      = {
                    pokemonList =>(
                        <TodoItem
                            key={pokemonList.text}
                            text={pokemonList.text}
                            completed={pokemonList.completed}
                            onComplete={()=>cachedPokemons(pokemonList.text)}
                            onDelete={()=>uncachedPokemons(pokemonList.text)}
                        />
                    )
                }
            />

            {openModal &&(
                <Modal>
                    <PokemonForm
                        addPokemons={addPokemons}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}

            <TodoButton
                setOpenModal = {setOpenModal}
            />
        </React.Fragment>
    );
}

export default App;
