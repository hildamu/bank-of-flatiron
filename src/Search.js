import React from 'react'
import { useState } from 'react';

function Search({stateRecords, SetData}) {
    const [searchValue, setSearch] = useState("")

function handleSearch(e){
    setSearch(e.target.value)

    const filtered = stateRecords.filter(indata => 
        indata.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    SetData(filtered);
}

    return (<div>
        <input 
            type="text" 
            className="Search"  
            placeholder="Search Your Recents Transactions..."
            value={searchValue}
            onChange={handleSearch}
        />
    </div> 
 )
}

export default Search;