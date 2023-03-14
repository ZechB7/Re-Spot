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
            placeholder="Search Username"
            onChange={(event) => setSearchInput(event.target.value)}
            value={searchInput} />
        <button
            onClick={() => window.location.replace("/profiles/" + searchInput)}
            className="searchBar"
            >
            Search
        </button>
    </div>)

};

export default SearchBar;
