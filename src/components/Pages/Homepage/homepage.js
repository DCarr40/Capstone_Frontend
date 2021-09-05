import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AllEvents from "../Events/allEvents";
import AllRunGroups from "../RunGroup/allRunGroups";
import "./homepage.css";

const Homepage = () => {
  useEffect(() => (document.title = "Home Page - Runner's Inertia"), []);

  const history = useHistory("/forecast");

  const goToForecastPage = () => history.push("/forecast");

  const goToCreateEventPage = () => history.push("/createEvent");

  const goToCreateRunGroupPage = () => history.push("/createGroup");

  const letsLogOut = () => history.push("/");

  const goToAllEventsPage = () => history.push("/allevents");

  return (
    <div>
      <div className="row container">
        <br></br>
        <div className="row container">
          <button
            className="mybutton whit-text fas fa-sun"
            onClick={goToForecastPage}
          >
            Checkout The Forecast
          </button>

          <div>
            <button
              className="mybutton whit-text"
              onClick={goToCreateRunGroupPage}
            >
              <i className="fas fa-users"> Create Run Group</i>
            </button>
          </div>
          <br></br>
          <div>
            <button
              className="mybutton whit-text"
              onClick={goToCreateEventPage}
            >
              <i className="fas fa-hiking"> Create Event</i>
            </button>
          </div>
          <br></br>
          <div>
            <button className="mybutton whit-text" onClick={goToAllEventsPage}>
              {" "}
              <i className="fas fa-running"> View My Events</i>
            </button>
          </div>
          <br></br>

          <div>
            <button className="mybutton whit-text" onClick={letsLogOut}>
              {" "}
              <i className="fas fa-running"> Log Out</i>
            </button>
          </div>
        </div>
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
