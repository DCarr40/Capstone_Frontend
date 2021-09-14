import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addRunnerToRunEventAction } from "../../Redux/Events/eventActions";

export const EventPage = ({ event }) => {
  const dispatch = useDispatch();
  const history = useHistory("/eventPage");
  const eventId = localStorage.getItem("eventId");
  const newRunner = localStorage.getItem("userInfo");

const joinEventOnClick = () => {
  dispatch(addRunnerToRunEventAction(eventId,newRunner));
}
 
const letsGoBack = () => {
  history.push("/homepage");
};

  return(
    <div>
    <h2>Event Page</h2>
    <button type="button" onClick={joinEventOnClick}> Join Event </button>
    <button type="button" class> Leave Event </button>
    <br></br>
    <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
    </div>
  )
 
};