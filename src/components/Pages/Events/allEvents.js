import React, { useState, useEffect } from "react";
import EventSummary from "./eventSummary";
import { useSelector, useDispatch } from "react-redux";
import { getAllEventsAction } from "../../Redux/Events/eventActions";
import SearchBar from "../../SearchBar/searchBar";

const AllEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events[0]);
  const [filters, setFilters] = useState("");
  const [data, setData] = useState([]);
  let newArrayOfEvents = "[]";

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
  }, [!events]);

  const handleChange = (e) => {
    e.preventDefault(); // prevents whole page from reloading on event change
    setFilters(e.target.value); // sets filters value to target event value
    console.log(filters);
  };

  return (
    <div className="event-list section">
      <div>
        <h3 className="white-text "> All Events </h3>
        <h5 className="white-text ">Scroll Through All Events</h5>
      </div>
      <div>
        <SearchBar handleChange={(event) => handleChange(event)} />
      </div>
      <div className="myBox">
        <div>{data}</div>
      </div>
    </div>
  );
};

export default AllEvents;
