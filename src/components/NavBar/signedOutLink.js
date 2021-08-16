import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignedOutLink = ({show}) => {

  return (
    // show &&
    <ul className="right">
      <li>
        <NavLink to="/signup" show='showDisplay'>Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLink;
