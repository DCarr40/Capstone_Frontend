import React from "react";
import { NavLink } from "react-router-dom";
import SignedInLink from "./signedInLink";
import SignedOutLink from "./signedOutLink";

const NavBar = () => {
  return (
    <nav className="navbar-wrapper fadeaway">
      <div className="container">
        <NavLink to="/" className="brand-logo hoverable">
          Runner's Inertia
        </NavLink>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
};

export default NavBar;
