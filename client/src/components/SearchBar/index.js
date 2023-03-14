import React, { useState } from 'react';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');

    return (<div>
        <input
            type="search"
            placeholder="Search For Re-Spot User"
            onChange={(event) => setSearchInput(event.target.value)}
            value={searchInput} />
        <button onClick={() => window.location.replace("/profiles/" + searchInput)}>
            Search
        </button>
    </div>)

};

export default SearchBar;
