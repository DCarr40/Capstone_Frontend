import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Weather from "../Weather/weather";
import SignedInLink from "./signedInLink";
import SignedOutLink from "./signedOutLink";

const NavBar = () => {
  const [showSignInDisplay, setShowSignInDisplay] = useState(false);
  const [showSignUpDisplay, setShowSignUpDisplay] = useState(false);
  const userLoggedIn = localStorage.getItem("user");
  
  useEffect(() => {
    if (userLoggedIn) { setShowSignInDisplay(true)}
    else {  setShowSignUpDisplay(true)}
  }, [showSignInDisplay, showSignUpDisplay])


  return (
    <nav className="navbar-wrapper fadeaway">
      <div className="">
        <NavLink to="/">
          Runner's Inertia
        </NavLink>
        <SignedInLink show={showSignInDisplay} />
        <SignedOutLink show={showSignUpDisplay} />
        
      </div>
    </nav>
  );
};

export default NavBar;
