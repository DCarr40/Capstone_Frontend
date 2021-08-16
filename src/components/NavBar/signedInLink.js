import React from "react";
import { NavLink } from "react-router-dom";

//Sign in link for navbar
const SignedInLink = ({show}) => {
  return (
    // show &&
    <ul className="right">
      <li>
        <NavLink to="/create">New Event</NavLink>
      </li>
      <li>
      <i className="fas fa-running"></i>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
       <i className="fas fa-hiking"></i>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn btn-floating black lighten-1 waves-effect waves-light"
        >
          DC
        </NavLink>
      </li>

    </ul>
  );
};

export default SignedInLink;
