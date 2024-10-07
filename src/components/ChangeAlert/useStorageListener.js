import React from "react";
//custom hookk
function useStorageListener(sincronize){


    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage',(change)=>{
        if(change.key === 'TODOS_V1'){
            setStorageChange(true);
        }
    });

    const toggleShow=()=>{
        sincronize();
        setStorageChange(false);
    }

    return {
        show:storageChange,
        toggleShow:toggleShow
    }
}

export {useStorageListener};