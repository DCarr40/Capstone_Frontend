import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SignedInLink from "./signedInLink";
import SignedOutLink from "./signedOutLink";

const NavBar = () => {
  const [showSignInDisplay, setShowSignInDisplay] = useState(false);
  const [showSignOutDisplay, setShowSignOutDisplay] = useState(false);
  const userLoggedIn = localStorage.getItem("user");

  useEffect(() => {
    if (!userLoggedIn) {
      setShowSignInDisplay(true);
      setShowSignOutDisplay(false);
    } else {
      setShowSignInDisplay(false);
      setShowSignOutDisplay(true);
    }
  }, [userLoggedIn]);

  return (
    <nav className="navbar-wrapper fadeaway">
      <div className="">
        <NavLink to="/">Runner's Inertia</NavLink>
        <SignedInLink show={showSignInDisplay} />
        <SignedOutLink show={showSignOutDisplay} />
      </div>
    </nav>
  );
};

export default NavBar;
