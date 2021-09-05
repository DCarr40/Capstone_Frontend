import React, { useState, useEffect } from "react";
import EventSummary from "./eventSummary";
import { useSelector, useDispatch } from "react-redux";
import { getAllEventsAction } from "../../Redux/Events/eventActions";
import { useHistory } from "react-router-dom";

const AllEvents = () => {
  const dispatch = useDispatch();
  const history = useHistory("");
  const events = useSelector((state) => state.event.events[0]);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getAllEventsAction());

    if (!events) {
      setData([<p>...Loading</p>]);
    } else {
      setData(
        events.map((events) => (
          <EventSummary
            event={events}
            key={events.id}
            title={events.title}
            details={events.details}
            creator={events.creator}
          />
        ))
      );
    }
  }, [events]);

  return (
    <div className="event-list section">
      <div>
        <h3 className="white-text "> All Events </h3>
        <h5 className="white-text ">Scroll Through All Events</h5>
      </div>
      <div className="myBox">
        <div>{data}</div>
      </div>
    </div>
  );
};

export default AllEvents;
