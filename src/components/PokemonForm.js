import React from "react";
import {usePokemons} from "../reactContext/pokemonContext";
function  PokemonForm({addPokemons, setOpenModal}){
    // Creamos un estado para nuestro nuevo TODO
    const [newPokemonValue, setnewPokemonValue] = React.useState('');
    // Creamos una función para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) => {
        setnewPokemonValue(event.target.value);
    };

    // Función para cerrar el modal
    const onCancel = () => {
        setOpenModal(false);
    };

    // Función para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        // Utilizamos nuestra función para añadir nuestro TODO
        addPokemons(newPokemonValue);
        // Cerramos nustro modal
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        setnewPokemonValue('')
    };

return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
            value={newPokemonValue}
            onChange={onChange}
            placeholder="Ingresa Un Nuevo Pokemon"
        />
        <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}>
                Cancelar
            </button>
            <button
                type="submit"
                className="TodoForm-button TodoForm-button--add">
                Añadir
            </button>
        </div>
    </form>
);

}
export {PokemonForm};