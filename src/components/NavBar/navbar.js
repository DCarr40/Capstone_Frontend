import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Weather from "../Weather/weather";
// import SignedInLink from "./signedInLink";
// import SignedOutLink from "./signedOutLink";

const NavBar = () => {
  const [showDisplay, setShowDisplay] = useState(false);

  return (
    <nav className="navbar-wrapper fadeaway">
      <div className="">
        <NavLink to="/">
          Runner's Inertia
        </NavLink>
        {/* <SignedInLink show={showDisplay} />
        <SignedOutLink show={showDisplay} /> */}
        
      </div>
    </nav>
  );
};

export default NavBar;
