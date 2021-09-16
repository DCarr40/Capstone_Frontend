import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./searchBar.css";
const SearchBar = () => {
  const [filters, setFilters] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setFilters(e.target.value);
    console.log(filters);
  };

  // onSubmit = () => {
  //     e.preventDefault();
  // }

  return (
    <div className="searchBox">
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
