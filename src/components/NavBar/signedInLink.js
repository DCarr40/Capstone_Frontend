import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";

//Sign in link for navbar
const SignedInLink = ({show}) => {
  return (
    // show &&
    <ul className="right">
      <li>
      <div><SearchBar/></div>
      </li>

      <li>

      </li>


    </ul>
  );
};

export default SignedInLink;
