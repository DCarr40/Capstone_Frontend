import React from "react";
import EventSummary from "./eventSummary";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent as listEvents } from "../Redux/actions/eventActions";

const EventList = ({ events }) => {
<<<<<<< HEAD:src/components/event/eventList.js
  const dispatch = useDispatch;
  const getEvents = useSelector((state) => state.getEvent);
  const x = getEvents;
  console.log(x);

  dispatch(listEvents());
=======
  const dispatch = useDispatch();
  const eventsData = useSelector((state) => state.getEvents);
  // const x = getEvents;
console.log(eventsData)
// useEffect(() => {
//   dispatch(listEvents());
// }, [dispatch])

 
>>>>>>> a6ef52e2e62df5d589a59156fc446791221f3b9e:src/components/Events/eventList.js

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
