import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllEventsAction } from "../../Redux/Events/eventActions";
import SearchBar from "../../SearchBar/searchBar";
import EventSummary from "./eventSummary";

export const MyEventsPage = ({ group }) => {
    const dispatch = useDispatch();
    const history = useHistory();
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
  
    const letsGoBack = () => {
        history.push("/homepage");
      };

    return (
        <div>
    <br></br>
    <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
        
      <div className="event-list section">
        <div>
          <h3 className="white-text "> All My Events </h3>
          <h5 className="white-text ">Scroll Through All My Events</h5>
        </div>
        <div>
          <SearchBar handleChange={(event) => handleChange(event)} />
        </div>
        <div className="myBox">
          <div>{data}</div>
        </div>
      </div>
      </div>
    );
  };
  
  export default MyEventsPage;
  