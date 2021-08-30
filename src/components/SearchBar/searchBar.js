import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const SearchBar = () => {
    const [filters,setFilters] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
       setFilters(e.target.value);
       console.log(filters)
    }

    // onSubmit = () => {
    //     e.preventDefault();
    // }

    return (
        <div>
            <input type="text" placeholder="Search Events..." onChange={handleChange} />
        </div>
    )
}

export default SearchBar;
