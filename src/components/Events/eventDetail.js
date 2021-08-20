import React from "react";

//This is the specific details for the event
const EventDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section event-details">
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title">Event Title - {id}</span>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by David</div>
          <div>6 August 2021, 10pm</div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
