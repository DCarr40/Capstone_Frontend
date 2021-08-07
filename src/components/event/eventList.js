import React from "react";
import EventSummary from "./eventSummary";

const EventList = ({events}) => {
  return (
    <div className="event-list section">
      {/*&& means "then" in this case. If events does exist then map*/}
        {events && events.map((event) =>{
          return (<EventSummary event={event} key={event.id}/>)
        })}
    </div>
  );
};

export default EventList;
