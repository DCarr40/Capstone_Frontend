import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { runnerReducers } from "../../Redux/reducers/runnerReducers";
import EventList from "../Events/eventList";
import "./homepage.css";
const Homepage = () => {
  const runnerData = useSelector((state) => state.runnerReducers);
  console.log(runnerData);
  const history = useHistory("/forecast");

  useEffect(() => (document.title = "Home Page - Runner's Inertia"), []);

  const goToForecastPage = () => {
    history.push("/forecast");
  };

  const goToCreateEventPage = () => {
    history.push("/create");
  };

  const letsLogOut = () => {
    history.push("/");
  };

  const goToAllEventsPage = () => {
    history.push("/allevents");
  };

  return (
    <div>
      <li>
        <NavLink
          to="/homepage"
          className="btn btn-floating black lighten-1 waves-effect waves-light"
        >
          DC
        </NavLink>
      </li>
      <button className="mybutton whit-text" onClick={goToForecastPage}>
        <i className="fas fa-sun">Checkout The Forecast</i>
      </button>
      <br></br>

      <br></br>
      <div>
        <button className="mybutton whit-text" onClick={goToCreateEventPage}>
          <i className="fas fa-hiking"> Create Event</i>
        </button>
      </div>
      <br></br>
      <div>
        <button className="mybutton whit-text" onClick={goToAllEventsPage}>
          {" "}
          <i className="fas fa-running"> View Events</i>
        </button>
      </div>
      <br></br>
      <div>
        <button className="mybutton whit-text" onClick={letsLogOut}>
          {" "}
          <i className="fas fa-running"> Log Out</i>
        </button>
      </div>
      <div className="container">
        <div class="col s6">
          <EventList />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
