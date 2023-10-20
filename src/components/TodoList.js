import React from "react";

function TodoList(props){
    return(
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.searchedPk.length) && props.onEmpty()}

           {props.searchedPk.map(props.render)}
            <ul>
                {props.children}
            </ul>
        </section>
    )
}
export {TodoList};