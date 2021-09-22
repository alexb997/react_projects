import React from "react";

const Search = ({onSearch,value}) => (
    <div>
        <label htmlFor="searchInput">Search: </label>
        <input id="searchInput" 
                type="text" 
                onChange={onSearch} 
                value={value}
                />
    </div>
);

export default Search;