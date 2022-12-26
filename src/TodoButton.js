import React from "react";

function TodoButton(){
    const onClickButton = (msg) =>{
        alert(msg)
    };
    return (

        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('Aqui va un modal ->')}
        >+
        
        </button>  );
}

export {TodoButton};