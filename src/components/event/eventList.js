import React from "react";
import EventSummary from "./eventSummary";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent as listEvents } from "../redux/actions/eventActions";

const EventList = ({ events }) => {
  const dispatch = useDispatch;
  const getEvents = useSelector((state) => state.getEvent);
  // const x = getEvents;
  console.log(getEvents);


    dispatch(listEvents());
 

  return (
    <div className="event-list section">
      {/* && means "then" in this case. If events does exist then map
        {events && events.map((event) =>{
          return (<EventSummary event={event} key={event.id}/>)
        })} */}

      <h2>Event List</h2>

      <div></div>
    </div>
  );
};

export default EventList;
