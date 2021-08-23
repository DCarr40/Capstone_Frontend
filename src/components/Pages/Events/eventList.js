import React from "react";
import EventSummary from "./eventSummary";
import { useSelector, useDispatch } from "react-redux";


const EventList = () => {
  const eventsData = useSelector((state) => state.eventReducers);

  console.log(eventsData);

  return (
    <div className="event-list section">
      <h2 className="white-text ">Event List</h2>
      <div>
        {/* && means "then" in this case. If events does exist then map */}
        {eventsData && eventsData.map((event) =>{
          return (<EventSummary event={event} key={event.id}/>)
        })}
      </div>
    </div>
  );
};

export default EventList;
