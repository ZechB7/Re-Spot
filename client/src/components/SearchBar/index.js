import React, { useState } from 'react';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');

    return (<div>
        <input
            type="search"
            placeholder="Search Username"
            onChange={(event) => setSearchInput(event.target.value)}
            value={searchInput} />
        <button
            onClick={() => window.location.replace("/profiles/" + searchInput)}
            style={{ backgroundColor: 'forestgreen', color: 'black', borderColor: 'forestgreen' }}
        >
            Search
        </button>
    </div>)

};

export default SearchBar;
