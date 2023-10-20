import React from "react";
function TodoSearch({setSearch, searchValue, loading}){

    const onSearchValue = (event) =>{
       // console.log(event.target.value);
        setSearch(event.target.value)
    }
    return( 
        <React.Fragment>

        <input  className="TodoSearch" 
                placeholder='Pokemon'
                value={searchValue}
                onChange={onSearchValue}
                disabled ={loading}
                />    
        </React.Fragment>     
    );
}

export {TodoSearch};