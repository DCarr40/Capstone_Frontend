import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLink = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Event</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating black lighten-1 waves-effect waves-light">
          DC
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLink;
