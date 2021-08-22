import React from "react";
import SignedInLink from "../../NavBar/signedInLink";

const Homepage = (props) => {

  useEffect(() => document.title = "Home Page - Runner's Inertia", [])

  
  return (
    <nav className="navbar-wrapper fadeaway">
      <div className="">
        <NavLink to="/">
          Runner's Inertia
        </NavLink>
        <SignedInLink />
      </div>
    </nav>
  );
};

export default Homepage;