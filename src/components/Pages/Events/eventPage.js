import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const GroupPage = ({ group }) => {
  const dispatch = useDispatch();
  const history = useHistory("/eventPage");
  const eventsDataArray = useSelector((state) => state.eventReducers);
  const [eventData, setEventData] = useState({
    name: "",
    groupType: "",
    events: [],
    runners: [],
  });

  const letsGoBack = () => {
    history.push("/homepage");
  };

  return (
    <div className="container">
      <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
      <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
        <div className="card-content ">
          <span className="card-title ">{event.title}</span>
          <p>Posted by -{event.creator}</p>
          <p className="black-text ">Created at {event.createdAt}</p>
          <p>
            <button onClick={viewEvent}>View Event</button>
          </p>
        </div>
      </div>
    </div>
  );
};
