import React from "react";
import EventSummary from "./eventSummary";

const EventList = () => {
  return (
    <div className="event-list section">
      <EventSummary />
      <EventSummary />
      <EventSummary />
      <EventSummary />
    </div>
  );
};

export default EventList;
