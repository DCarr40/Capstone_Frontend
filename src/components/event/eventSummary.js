import React from "react";

//This is the template of the individual event card
//It will be placed in the event list with multiple events
const EventSummary = ({ event }) => {
  return (
    <div>
      <div className="card z-depth-1 event-summary  red darken-2 hoverable">
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
