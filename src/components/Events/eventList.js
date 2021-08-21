import React from "react";
import EventSummary from "./eventSummary";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { eventActions as listEvents } from "../Redux/actions/eventActions";

const EventList = ({ events }) => {
  const dispatch = useDispatch();
  const eventsData = useSelector((state) => state.listEvents);
  // const x = getEvents;
console.log(eventsData)
// useEffect(() => {
//   dispatch(listEvents());
// }, [dispatch])

 

  return (
    <div className="event-list section">
      <h2>Event List</h2>
      <div>
              {/* && means "then" in this case. If events does exist then map */}
        {/* {events && events.map((event) =>{
          return (<EventSummary event={event} key={event.id}/>)
        })} */}
      </div>


      

      
    </div>
  );
};

export default EventList;
