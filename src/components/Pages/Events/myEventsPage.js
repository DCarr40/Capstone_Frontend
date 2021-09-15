import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getRunnerAction } from "../../Redux/Runners/runnerActions";
import SearchBar from "../../SearchBar/searchBar";
import EventSummary from "./eventSummary";

export const MyEventsPage = ({ group }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userInfo = localStorage.getItem("userInfo");
    const [filters, setFilters] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
          dispatch(getRunnerAction(userInfo));
  
    //   if (!events) {
    //     setData([<p>...Loading</p>]);
        
    //   } else {
    //     setData(
    //       events.map((events) => (
    //         <EventSummary
    //           event={events}
    //           key={events.id}
    //           title={events.title}
    //           details={events.details}
    //           creator={events.creator}
    //         />
    //       ))
    //     );
    //   }
    }, [/*!events*/]);
  
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
  