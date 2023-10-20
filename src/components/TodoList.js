import React from "react";

function TodoList(props){
    return(
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalPokemons) && props.onEmpty()}

            {(!!props.totalPokemons && !props.searchedPk.length) && props.onEmptySearch(props.searchValue)}

            {props.searchedPk.map(props.children)}

            <ul>
                {props.children}
            </ul>
        </section>
    )
}
export {TodoList};