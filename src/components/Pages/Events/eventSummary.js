import React from "react";

//This is the template of the individual event card
//It is a brief summary of the creation of the event
//It will be placed in the event list with multiple events
const EventSummary = ({ event }) => {
  return (
    <div>
      <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
        <div className="card-content ">
          <span className="card-title ">{event.title}</span>
          <p>Posted by David</p>
          <p className="black-text ">6 August 2021, 9pm</p>
        </div>
      </div>
    </div>
  );
};

export default EventSummary;
