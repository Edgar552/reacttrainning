import React from "react";
function useLocalStorage(itemName, initialValue){

    const[state,dispatch] = React.useReducer(reducer, initialState({initialValue}));

    const {
        sincronized,
        error,
        loading,
        pokemones,
    } =  state;
    // const [sincronized, setSincronized]    = React.useState(true);
    // const [error, setError]     = React.useState(false);
    // const [loading, setLoading] = React.useState(true);
    // const [pokemones, setPokemones]      = React.useState(initialValue);

    const onError = (error)=>{
        dispatch({type:actionTypes.error, payload: error});
    }

    const onSuccess = (pokemonList) => {
        dispatch({type:actionTypes.success, payload:pokemonList})
    }

    const onSincronize = () => {
        dispatch({type:actionTypes.sincronize})
    }

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
                onSuccess(pokemonList);
                // setLoading(false);
                // setSincronized(true)

            }
            catch (error){
                onError(error);
            }
        },3000);
    },[sincronized]);
    const UpdatePokemons = (updatedList) => {
        const stringifyPokemons = JSON.stringify(updatedList);
        localStorage.setItem(itemName, stringifyPokemons);
        onSuccess(updatedList);
    };

    const sincronize = () =>{
      onSincronize();
    };

    return {
        pokemones,
        UpdatePokemons,
        loading,
        error,
        sincronize
    };

}

const initialState = ({initialValue}) => ({
    sincronized: true,
    error:false,
    loading:true,
    pokemones: initialValue,
});


const actionTypes = {
    error:'error',
    success:'success',
    sincronize:'sincronize'

}

const reducerObject = (state,payload)=> ({
    [actionTypes.error]: {
        ...state,
        error:true
    },
    [actionTypes.success]: {
        ...state,
        error:false,
        loading:false,
        sincronized: true,
        pokemones:payload
    },
    [actionTypes.sincronize]: {
        ...state,
        loading:true,
        sincronized: false}


});

const reducer = (state, action) =>{
    return reducerObject(state,action.payload)[action.type] || state;
}

export {useLocalStorage};