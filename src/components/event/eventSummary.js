import React from "react";

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
