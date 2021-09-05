import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeEventAction } from "../../Redux/Events/eventActions";
import "./styles.css"
//This is the template of the individual event card
//It is a brief summary of the creation of the event
//It will be placed in the event list with multiple events
const EventSummary = ({ event }) => {
  const dispatch = useDispatch();
  const eventsDataArray = useSelector((state) => state.eventReducers);
  const [eventData, setEventData] = useState({
    title: "",
    details: "",
    creator: "",
    tags: "",
  });

  useEffect(() => (document.title = "Create Event - Runner's Inertia"), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    eventsDataArray.pop(eventData.id);
  };

  const addEventToRunner = () => {

  };

  return (
    <div className= "container">
      <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
        <div className="card-content ">
          <span className="card-title ">{event.title}</span>
          <p>Posted by -{event.creator}</p>
          <p className="black-text ">Created at {event.createdAt}</p>
          <p>
            <button onClick={addEventToRunner}>Add Event</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventSummary;
