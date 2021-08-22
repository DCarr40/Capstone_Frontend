import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import EventList from "../Events/eventList";

const Homepage = (props) => {
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

  return (
    <div>
      <button className="btn" onClick={goToForecastPage}><i className="fas fa-sun">Checkout The Forecast</i></button>
      <br></br>
      <br></br>
      <div>
        <button className="btn" onClick={goToCreateEventPage}><i className="fas fa-hiking"> Create Event</i></button>
      </div>
      <br></br>
      <div>
        <button className="btn" onClick={letsLogOut}>  <i className="fas fa-running"> Log Out</i></button>
      </div>

      <div className="container"><EventList/></div>
      <br></br>
    </div>
  );
};

export default Homepage;
