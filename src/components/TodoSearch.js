import React from "react";
function TodoSearch({setSearch, searchValue}){

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
                />    
        </React.Fragment>     
    );
}

export {TodoSearch};