import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addRunnerToEventAction, getAllEventsAction, getEventAction } from "../../Redux/Events/eventActions";

export const EventPage = ({ event }) => {
  const dispatch = useDispatch();
  const history = useHistory("/eventPage");
  const eventId = localStorage.getItem("eventId");
  const newRunner = localStorage.getItem("userInfo");

  const joinEventOnClick = () => {
  dispatch(addRunnerToEventAction(eventId,newRunner));
  }
 
  const letsGoBack = () => {
  history.push("/homepage");
  };

return (
  <div className="container">
    <div>
    <h2 className="white-text ">Event Page</h2>
    <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
      <div className="card-content ">
        <span className="card-title ">{localStorage.getItem("currentEventTitle")}</span>
        <p>Event Details -{localStorage.getItem("currentEventDetails")}</p>
        <p>Event Runners -{localStorage.getItem("currentEventRunners")}</p>
      </div>
    </div>
    <button type="button" onClick={joinEventOnClick}> Join Event </button>
    <button type="button" class> Leave Event </button>
    <br></br>
    <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
    </div>
    </div>
  )
 
};