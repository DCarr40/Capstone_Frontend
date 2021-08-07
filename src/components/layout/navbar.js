import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./signedInLink";
import SignedOutLink from "./signedOutLink";

const NavBar = () => {
  return (
    <nav className="navbar-wrapper red darken-2">
      <div className="container">
        <Link to="/" className="brand-logo hoverable">
          <div>Runner's Inertia</div>
        </Link>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
};

export default NavBar;
