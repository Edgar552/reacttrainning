import React from "react";

function TodoButton(props){
    const onClickButton = () =>{
       props.setOpenModal(prevState=>!prevState);
    };
    return (

        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >+
        
        </button>  );
}

export {TodoButton};