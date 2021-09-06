import React from "react";
import { NavLink } from "react-router-dom";

export const SecondNav = () => {
  return (
    <nav className="navbar-wrapper fadeaway2">
      <ul className="right">
        <li>
          <NavLink className="whit-text fas fa-sun" to="/forecast">
            {" "}
            Checkout The Forecast
          </NavLink>
        </li>
        <li>
          <NavLink className="whit-text fas fa-users" to="/createGroup">
            {" "}
            Create Run Group
          </NavLink>
        </li>
        <li>
          <NavLink className="whit-text fas fa-hiking" to="/createEvent">
            {" "}
            Create Event
          </NavLink>
        </li>
        <li>
          <NavLink className="fas fa-running" to="/eventPage">
            {" "}
            View My Events
          </NavLink>
        </li>
        <li>
          <NavLink className="fas fa-running" to="/map">
            {" "}
            View Map
          </NavLink>
        </li>
        <li>
          <NavLink className="fas fa-running" to="/">
            {" "}
            Log Out{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
