import React from "react";
import { NavLink } from "react-router-dom";
import SignedInLink from "./signedInLink";
import SignedOutLink from "./signedOutLink";

const NavBar = () => {
  return (
    <nav className="navbar-wrapper red darken-2">
      <div className="container">
        <NavLink to="/" className="brand-logo hoverable">
          Runner's Inertia
        </NavLink>
        </div>
        <div className="navbar-wrapper black">
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
};

export default NavBar;
