import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLink = ({show}) => {

  return (
    // show &&
    <ul className="right">
      <li>
        <NavLink to="/register" show='showDisplay'>Register</NavLink>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLink;
