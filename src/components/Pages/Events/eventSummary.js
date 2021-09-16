import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
//This is the template of the individual event card
//It is a brief summary of the creation of the event
//It will be placed in the event list with multiple events
const EventSummary = ({ event }) => {
  const history = useHistory("");

  useEffect(() => (document.title = "Create Event - Runner's Inertia"), []);

  const viewEventPage = () => {
   
    localStorage.setItem("eventId", event._id);
    localStorage.setItem("currentEventTitle", event.title);
    localStorage.setItem("currentEventDetails", event.details);
    localStorage.setItem("currentEventRunners", mapRunners());
    history.push("/eventPage");
  };

  const mapRunners = () =>  {
    try {
      return  event.runners.map((runners) => `${runners.username}, `)
    } catch (error) {
      return <p>...Loading</p>, window.location.assign("/homepage");
    }
  
    }

  return (
    <div className="container">
      <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
        <div className="card-content ">
          <span className="card-title ">{event.title}</span>
          <p>Posted by -{event.creator}</p>
          <p>Event Details -{event.details}</p>
          <p>Event Runners -{mapRunners()}</p>
          <p>Tags -{event.tags}</p>
          <p className="black-text ">Created at {event.createdAt}</p>
          <p>
            <button onClick={viewEventPage}>View Event</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventSummary;
