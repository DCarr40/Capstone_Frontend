import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SignedOutLink from "./signedOutLink";

const NavBar = () => {
  const [showSignInDisplay, setShowSignInDisplay] = useState(false);
  const [showSignOutDisplay, setShowSignOutDisplay] = useState(false);

  return (
    <nav className="navbar-wrapper fadeaway">
      <div>
        <NavLink to="/">Runner's Inertia</NavLink>
        <SignedOutLink show={showSignOutDisplay} />
      </div>
    </nav>
  );
};

export default NavBar;
