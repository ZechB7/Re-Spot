import React, { useState } from 'react';
import './SearchBar.css';


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');

    return (<div>
        <button onClick={() => window.location.replace("/profiles/" + searchInput)}>
            Search
        </button>
        <input
            className="searchBar"
            type="search"
            placeholder="Search For Re-Spot User"
            onChange={(event) => setSearchInput(event.target.value)}
            value={searchInput} />
    </div>)

};

export default SearchBar;
