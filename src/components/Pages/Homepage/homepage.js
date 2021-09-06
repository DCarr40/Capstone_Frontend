import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Map from "../../Map/map";
import { SecondNav } from "../../SecondNav/secondNav";
import AllEvents from "../Events/allEvents";
import AllRunGroups from "../RunGroup/allRunGroups";
import "./homepage.css";
const Homepage = () => {
  useEffect(() => (document.title = "Home Page - Runner's Inertia"), []);

  return (
    <div>

      <SecondNav/>
      <div className="row container">
        <br></br>

        <div className="col s6 ">
          <AllEvents />
        </div>

        <div className="col s6">
          <AllRunGroups />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
