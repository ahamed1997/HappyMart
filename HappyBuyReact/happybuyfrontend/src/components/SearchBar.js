import React from 'react'

 const SearchBar = (props)=> {
     
    return (
        <div>
            <form onSubmit={props.handleSearchItem}>
                <input type="text" autoComplete="off" name="searchItem" placeholder="search products"/>
                <button>Search</button>
            </form>
        </div>
    )
}
export default SearchBar