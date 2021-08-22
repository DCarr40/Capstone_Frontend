import React from "react";
import { NavLink } from "react-router-dom";

//Sign in link for navbar
const SignedInLink = ({show}) => {
  return (
    // show &&
    <ul className="right">
      <li>
    
      </li>

      <li>

      </li>
      <li>
        <NavLink
          to="/homepage"
          className="btn btn-floating black lighten-1 waves-effect waves-light"
        >
          DC
        </NavLink>
      </li>

    </ul>
  );
};

export default SignedInLink;
