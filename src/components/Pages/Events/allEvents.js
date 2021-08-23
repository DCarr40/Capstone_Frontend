import React from "react";
import EventSummary from "./eventSummary";
import { useSelector, useDispatch } from "react-redux";
import { getAllEventsAction } from "../../Redux/actions/eventActions";
import { useHistory } from "react-router-dom";


const EventList2 = () => {
 const dispatch = useDispatch();
 dispatch(getAllEventsAction());
  const eventsData = useSelector((state) => state.eventReducers);

  const history = useHistory("");
  const letsGoBack = () => {
    history.push("/homepage");
  };
  console.log(eventsData);

  return (
    <div className="event-list section">
        <div><button onClick={letsGoBack}>Go Back</button></div>
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

export default EventList2;
